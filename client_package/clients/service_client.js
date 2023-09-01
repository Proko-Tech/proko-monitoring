import BaseHttpClient from "../net/base_http_client.js";
import constants from '../constants.js';

export default class ServiceClient extends BaseHttpClient {
  constructor(
    protocol = constants.DEFAULT_PROTOCOL, host = constants.DEFAULT_HOST) {
    super(protocol, host);
  }

  /**
   * Makes POST request to /service endpoint.
   * @param end_point
   * @param data
   * @returns {Promise<*>}
   * @constructor
   */
  async PostService(data, end_point = 'service') {
    try {
      return await this.sendData(end_point, 'POST', data);
    } catch (err) {
      return {data: {ok: false}, err};
    }
  }
}
