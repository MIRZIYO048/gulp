const fs = require('fs')
const path = './gulp/tasks'
const arR = fs.readdirSync(path).map(name => name = `${path}/${name}`)


module.exports = arR
