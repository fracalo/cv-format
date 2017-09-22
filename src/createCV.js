const mergeMarkedDataToTml = require('./bin/create-cv')
const tml = __dirname + '/views/cv1.pug'
const data = __dirname + '/data.yml'

process.stdout.write(
  mergeMarkedDataToTml(data)(tml)
)
