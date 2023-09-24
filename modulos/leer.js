const fs = require('fs')

function leer(){
    let path = fs.readFileSync("../data/registro.json","utf-8")
    let array = JSON.parse(path)
    return array
}
module.exports = leer