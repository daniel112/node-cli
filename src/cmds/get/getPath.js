const chalk = require('chalk')
const helpers = require('../../helpers')
const _ = require('lodash')
const {spawn} = require('child_process')

/**
 * @todo - use bash to do the navigation, since we cant do it from node
 * 
 */
/**
 * returns the path given the alias
 * @example zona get desktop
 * @param {string} alias
 * @returns {string}
 */
const getPath = (alias) => {

  const configCopy = helpers.getConfig()
  const paths = _.get(configCopy, 'path')

  return paths[alias]
    ? paths[alias]
    : console.log(chalk.bold.red(`Alias ${alias} not found!`))
}

/**
 * Navigates to the repo
 */
// const navigate = (path) => {
//   console.log(chalk.green(`Navigating to ${path}...`))
//   // spawns a new terminal session at this location
//   const child = spawn('bash', ['-i'], {
//     cwd: path,
//     // env: process.env,
//     stdio: 'inherit'
//   })
//   child.on('error', (data) => console.log(chalk.red('ERROR: Unable to change directory, check the path')))
// }

module.exports = getPath