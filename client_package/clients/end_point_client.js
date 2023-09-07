import BaseHttpClient from "../net/base_http_client.js";
import constants from '../constants.js';

export default class EndPointClient extends BaseHttpClient {
  constructor(
    protocol = constants.DEFAULT_PROTOCOL, host = constants.DEFAULT_HOST) {
    super(protocol, host);
  }

  /**
   * Private function that makes POST request to /service/end_point/batch
   * @param data
   * @param end_point
   * @returns {Promise<{data: {ok: boolean}, err}|*>}
   * @constructor
   */
  async PostEndPoint(data, end_point = 'service/end_point/batch') {
    try {
      return await this.sendData(end_point, 'POST', data);
    } catch (err) {
      return {data: {ok: false}, err};
    }
  }
}
