# Setup
* `yarn install`
* `yarn link`

## Commands
* `zona set ${alias}` - sets an alias for the current directory
* `zona open ${alias}` - opens the alias in vscode 

## Testing
* edit `src/repos/musicGame.js` > line 16 && 30 for the right path to your musicGame repo
* run `dan repos musicGame` on your terminal - navigates to your repo path
* run `dan repos musicGame code` - opens up vscode for your project

## Error
* if you get permission denied after `yarn link`
* ensure that the root `index.js` has execute permission
  * run `chmod +x index.js`


