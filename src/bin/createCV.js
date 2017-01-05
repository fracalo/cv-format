const renderPug = require('./renderPug')
const parseYml = require('./parseYml')

const tpl =`${process.cwd()}/src/views/cv1.pug`
const path = `${process.cwd()}/src/data.yml` 

parseYml(path)( // this return a node style 
    (e, data) => {
        // process.stdout.write 
        if (e) {
            console.log(e)
            return
        }
        process.stdout.write(
        renderPug(tpl)(data)
        )
    }
)

