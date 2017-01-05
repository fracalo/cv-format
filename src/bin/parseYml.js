const yaml = require('js-yaml')
const fs = require('fs')

const parseYml = path => {
    try {
        const yml = yaml.safeLoad(fs.readFileSync(path, 'utf8'))
        return f => f(null, yml)
    }
    catch (e) {
        return f => f(e)
    }
}

module.exports = parseYml

