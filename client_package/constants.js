const constants = {
  DEFAULT_PROTOCOL: 'https://',
  DEFAULT_HOST: 'monitoring.api.prokopark.us',
  DEFAULT_CONFIG: {
    request_time: {
      filter_alert: {
        upperbound_threshold: 0.5
      }
    },
    cpu_usage: {
      filter_alert: {
        upperbound_threshold: 0.5
      }
    },
    ram_usage: {
      filter_alert: {
        upperbound_threshold: 0.5
      }
    }
  }
}

export default constants;
