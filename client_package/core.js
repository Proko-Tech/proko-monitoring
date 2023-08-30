import parser from './parser.js';
import ServiceClient from './clients/service_client.js';

const service_client = new ServiceClient();

async function initialize() {
  const client_defined_config = parser.parseConfig();
  const response = await service_client.PostService(client_defined_config);
  console.log(response);
}

initialize();
