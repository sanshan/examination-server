const path = require('path')
const fs = require('fs')
const YAML = require('yaml')


const configFile = fs.readFileSync(path.resolve(__dirname, 'config.yml'),{encoding: 'utf8'})

module.exports = YAML.parse(configFile)
