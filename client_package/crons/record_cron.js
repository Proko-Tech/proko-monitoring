import cron from 'node-cron';

export default class RecordCron {
  async runCron(client_config, accumulated_requests, callback) {
    cron.schedule("*/10 * * * * *", function() {
      const batch_request = {
        client_config,
        accumulated_requests,
      }
      if (accumulated_requests.length === 0) {
        return;
      }
      callback(batch_request);
    });
  }
}
