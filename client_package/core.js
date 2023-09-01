import parser from './parser.js';
import ServiceClient from './clients/service_client.js';

const service_client = new ServiceClient();

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
async function initialize() {
  const client_defined_config = parser.parseConfig();
  const response = await service_client.PostService(client_defined_config);
  if (!response.data.ok) {
    initial_status.is_initial_post_service_ok = false;
  }
}
