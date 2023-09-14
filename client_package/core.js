import parser from './parser.js';
import ServiceClient from './clients/service_client.js';
import RecordCron from './crons/record_cron.js';
import {DateTime} from 'luxon';
import SendEndPointStatsProcessor
  from "./processors/send_end_point_stats_processor.js";

const service_client = new ServiceClient();
const send_end_point_stats_processor = new SendEndPointStatsProcessor();
const accumulated_requests = [];

class CheckInitialStatus {
  constructor(is_initial_post_service_ok=false) {
    this.is_initial_post_service_ok = is_initial_post_service_ok;
  }

  IsGeneralStatusOk() {
    return this.is_initial_post_service_ok;
  }
}

const initial_status = new CheckInitialStatus(true);

/**
 * Initialize function that is called in client's entry point like app.js file.
 * @returns {Promise<void>}
 */
async function Initialize() {
  const client_defined_config = parser.parseConfig();
  const response = await service_client.PostService(client_defined_config);
  if (!response.data.ok) {
    initial_status.is_initial_post_service_ok = false;
  }
  const record_cron = new RecordCron();
  await record_cron.runCron(client_defined_config, accumulated_requests, async function(batch_request) {
    const response = await send_end_point_stats_processor.Process(batch_request);
    if (!response.data.ok) {
      // keep the previous batch and accumulate it until the next iteration.
      return;
    }
    accumulated_requests.length = 0;
  });
}

function Monitor() {
  return async function (req, res, next) {
    const current_request = {
      request_stats: req,
      request_start_time:
        DateTime.local().toUTC().toSQL({includeOffset: false}),
      end_point_name: req.url,
      end_point_method: req.method,
    }
    accumulated_requests.push(current_request);
    res.once('finish', () => {
      current_request.response_stats = res;
      current_request.request_end_time =
        DateTime.local().toUTC().toSQL({includeOffset: false});
      current_request.elapsed_time =
        current_request.request_start_time - current_request.request_end_time;
      current_request.response_status_code = res.statusCode;
    });
    next();
  }
}

export default {Initialize, Monitor}
