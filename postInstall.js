const prompts = require('prompts');
var fs = require('fs');
const chalk = require('chalk');

const configFileName = '.cli-config.json'
const templateFile = '.cli-config.json.template'

const questions = [
  {
    type: 'text',
    name: 'alias',
    message: 'set an alias for this cli (default zona):'
  },
  {
    type: 'text',
    name: 'editor',
    message: 'VSCode editor command? (leave blank if unsure): (default "code")'
  },
];

(async () => {
  const response = await prompts(questions)
 
  const alias = response.alias || 'zona'
  const editor = response.editor || 'code'
  await updatePackageJson(alias)
  try {
    await fs.promises.access(configFileName)
    console.log('Config file already exists')
    throw ""
  } catch (error) {
    await setupConfig(editor)
  }
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

const setupConfig = (editor) => {

  return new Promise(async (resolve, reject) => {
    fs.readFile(templateFile, 'utf-8', (err, data) => {
      if (err) throw err
      // replace the default editor with the new value
      const regex = /"editor": "(.*)"/g
      const match = regex.exec(data)
      const newValue = data.replace(match[1], editor)
      fs.writeFile(configFileName, newValue, 'utf-8', (err) => {
        if (err) throw err
        console.log(`\n cli vscode editor cmd is now set to ${chalk.bold.green(editor)}`)
        resolve()
      })
    })
  })
}