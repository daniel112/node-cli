const config = require('../../.cli-config.json')
/**
 * returns the config json obj
 * @returns {object}
 */
const getConfig = () => {
  return config
}

module.exports = getConfig