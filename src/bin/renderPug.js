const pug = require('pug')

const renderPug = tmpl => data => {
    const dataOpt = Object.assign({cache: true}, data)
    return pug.renderFile(tmpl, dataOpt)
}

module.exports = renderPug

