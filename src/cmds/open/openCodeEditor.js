const {spawn} = require('child_process')
const homedir = require('os').homedir()
const chalk = require('chalk')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const helpers = require('../../helpers')

/**
 * @example zona open desktop
 * @param {string} path 
 */
const openCodeEditor = async (path) => {
  if (!path) return console.log(chalk.bold.red('Path not found'))
  try {
    const configCopy = helpers.getConfig()
    await exec(`${configCopy.editor} ${path}`)
  } catch (error) {
    console.log(`${chalk.red('ERROR')} - ${error}`)
  }

}

module.exports = openCodeEditor