const {argv} = require('yargs')

const availableCommands = ['repos']

const commands = argv['_']
// console.log(commands)
if (commands && availableCommands.some((val) => val === commands[0])) {
  require(`./${commands[0]}`)(commands)
}


// gets current working directory
// console.log(process.cwd())
// console.log( process.argv );