const config = require('../../.cli-config.json')
const _ = require('lodash')
var fs = require('fs')
const appRoot = require('app-root-path').toString()

const updateConfig = (obj) => {

  const merged = _.merge(config, obj)
  fs.writeFile(`${appRoot}/.cli-config.json`, JSON.stringify(merged, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!')
  })
}

module.exports = updateConfig