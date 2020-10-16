const prompts = require('prompts');
var fs = require('fs');
const chalk = require('chalk');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'alias',
    message: 'set an alias for this cli (default zona):'
  });
 
  const alias = response.alias || 'zona'
  await updatePackageJson(alias)
  await setupConfig()
  console.log(`\n Run ${chalk.bold.blue('yarn link')} to complete the setup`)
})()

const updatePackageJson = (alias) => {
  return new Promise((resolve, reject) => {
    fs.readFile('package.json', 'utf-8', (err, data) => {
      if (err) throw err
      // replace the default alias with the new value
      const regex = /(?<=")(.*)(?=": "index.js")/g
      const newValue = data.replace(regex, alias)
  
      fs.writeFile('package.json', newValue, 'utf-8', (err) => {
        if (err) throw err
        console.log(`\n cli alias is now set to ${chalk.bold.green(alias)}`)
        resolve()
      })
    })
  })
}

const setupConfig = () => {
  const configFileName = '.cli-config.json'

  return new Promise(async (resolve, reject) => {
    try {
      await fs.promises.access(configFileName)
      console.log('Config file already exists')
      resolve()
    } catch (error) {
      // destination will be created or overwritten by default.
      fs.copyFile('.cli-config.json.template', configFileName, (err) => {
        if (err) throw err
        console.log('Creating config file...')
        resolve()
      })
    }
   
  })
}