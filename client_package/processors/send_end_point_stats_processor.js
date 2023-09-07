import EndPointClient from "../clients/end_point_client.js";

export default class SendEndPointStatsProcessor {
  constructor() {
    this.end_point_client_ = new EndPointClient();
  }

  async Process(batch_request) {
    return await this.end_point_client_.PostEndPoint(batch_request);
  }
}
