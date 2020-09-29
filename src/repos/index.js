const musicGame = require('./musicGame')

const executeCommand = (params) => {
  // remove the first param
  params.shift()

  switch (params.shift()) {
    case "musicGame":
      musicGame(params)
      break;
  
    default:
      break;
  }
}

module.exports = executeCommand