var fs = require('fs')
var jsYml = require('js-yaml')
var marked = require('marked')
var _ = require('lodash')


var parseYml = loc => jsYml.load( fs.readFileSync(loc) )


var recursiveMarkdownParser = (obj, keysToSkip) => 
  _.isString(obj) ?
    marked(obj) :
  _.isArray(obj) ?
    obj.map(x => recursiveMarkdownParser(x, keysToSkip) ) :
  (_.isObject(obj) && !_.isFunction(obj) ) ?
    Object.keys(obj).reduce((ac,k) => {
       const filteredRes =
         (keysToSkip && keysToSkip.includes(k)) ?
         obj[k] :
         recursiveMarkdownParser(obj[k], keysToSkip)

      return { ...ac, [k]: filteredRes }
      }, {}):

    obj
    

module.exports = {
  parseYml,
  recursiveMarkdownParser
}
