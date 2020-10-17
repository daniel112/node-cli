const {argv} = require('yargs')
const {set, get, open} = require('./cmds')
const chalk = require('chalk')

const commands = argv['_']

const executeCommand = (params) => {
  // remove and pull the first param
  const cmd = params.shift()

  // pass the rest of the params to the commands that match
  switch (cmd) {
    case "set":
      set.setPath(params[0])
      break;
    case "get":
      const path = get.getPath(params[0])
      path && console.log(`Alias: ${chalk.green(params[0])} links to ${chalk.blue(path)}`)
      break;
    case "open":
      open.openCodeEditor(get.getPath(params[0]))
      break;
    default:
      console.log(`command '${cmd}' not supported!`)
      break;
  }
}

executeCommand(commands)



