const renderPug = require('./renderPug')
const parseYml = require('./parseYml')
const { recursiveMarkdownParser } = require('./parsing')

const mergeMarkedDataToTml = ymlPath => tpl =>
    parseYml(ymlPath)( 
        (e, data) => {
            // process.stdout.write 
            if (e) {
                console.log(e)
                return
            }
            return renderPug(tpl)(
              recursiveMarkdownParser(data, ['title','name', 'surname', 'address','phone', 'mail', 'mail2','site','github','stackoverflow','codepen', 'company', 'business', 'position','ed', 'cert', 'from','to', 'institute', 'core_business', 'qualification'])
            )
        }
    )

module.exports = mergeMarkedDataToTml
