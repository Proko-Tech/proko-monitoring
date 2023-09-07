import fetch from 'node-fetch';

/**
 * HttpClient base class for all clients.
 */
export default class BaseHttpClient {
  constructor(protocol, host) {
    this.protocol_ = protocol;
    this.host_ = host;
  }

  /**
   * General make request method that creates a new CRUD based request.
   * @param end_point
   * @param options
   * @returns {Promise<any>}
   * @private
   */
  async #makeRequest(end_point, options) {
    const response = await fetch(`${this.protocol_}${this.host_}/${end_point}`, {
      ...options,
      credentials: 'include'
    });
    return await response.json();
  }

  /**
   * Makes a get request with the given endpoint.
   * @param end_point
   * @returns {Promise<*>}
   */
  async retrieveData(end_point) {
    return this.#makeRequest(end_point)
  }

  /**
   * Makes a requests that sends data to the REST API. Ex: POST, PUT.
   * @param end_point
   * @param method
   * @param data
   * @returns {Promise<*>}
   */
  async sendData(end_point, method, data) {
    const headers = {
      'Content-Type': 'application/json',
      credentials: 'include'
    };

    return this.#makeRequest(end_point, {
      method,
      headers,
      body: JSON.stringify(data)
    });
  }
}
