const chalk = require('chalk')
const helpers = require('../../helpers')
/**
 * Sets the current dir and links it to an alias
 * so it can be called with 'zona get ${alias}'
 * @param {string} alias - alias for the current path
 */
const setPath = (alias) => {
  if (!alias) console.log(`${chalk.bold.red('Error:')} Please provide an alias\n${chalk.bold.green('Example:')} zona set myAlias`)
  const currentDir = process.cwd()
  console.log(`linking ${chalk.cyan(currentDir)} to ${chalk.bold.green(alias)}`)
  const configCopy = helpers.getConfig()
  configCopy.path[alias] = currentDir
  helpers.updateConfig(configCopy)
}

module.exports = setPath