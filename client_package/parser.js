import rc from 'rc';
import constants from './constants.js';

/**
 * Parse the user defined config.
 * @returns {*}
 */
function parseConfig() {
  return rc('prokomonitoring', constants.DEFAULT_CONFIG);
}

export default {parseConfig}
