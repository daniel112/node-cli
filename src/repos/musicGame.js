const util = require('util')
const {spawn} = require('child_process')
const homedir = require('os').homedir()
const chalk = require('chalk')

const exec = util.promisify(require('child_process').exec)
// const { stdout, stderr } = await exec('cd c:\\users\\Danny\\Desktop');

/**
 * Navigates to the repo
 */
const navigate = () => {
  console.log(chalk.green('Navigating to MusicGame...'))
  // spawns a new terminal session at this location
  const child = spawn('bash', ['-i'], {
    cwd: `${homedir}/Documents/Code/MusicGame`,
    env: process.env,
    stdio: 'inherit'
  })
  child.on('error', (data) => console.log(chalk.red('ERROR: Unable to change directory, check the path of MusicGame repo')))
}

/**
 * 
 * @param {Array} commands 
 */
const musicGame = async (commands) => {
  switch (commands[0]) {
    case "code":
      const { stdout, stderr } = await exec(`code ${homedir}/Documents/Code/MusicGame`);
      break;
  
    default:
      navigate()
      break;
  }
}

module.exports = musicGame