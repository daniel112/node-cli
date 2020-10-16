const {argv} = require('yargs')
const {set} = require('./cmds')
const availableCommands = ['set']

const commands = argv['_']

const executeCommand = (params) => {
  // remove and pull the first param
  const cmd = params.shift()

  // pass the rest of the params to the commands that match
  switch (cmd) {
    case "set":
      set.setPath(params)
      break;
  
    default:
      break;
  }
}

if (commands && availableCommands.some((val) => val === commands[0])) {
  executeCommand(commands)
}
else {
  console.log('command not supported!')
}


