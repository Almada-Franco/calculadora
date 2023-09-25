const fs = require('fs')

function leer(){
    let path = fs.readFileSync("./data/registro.json", "utf-8")
    let array = JSON.parse(path)
    return array
}

function guardarArchivo(array){
    let json = JSON.stringify(array)
    fs.writeFileSync("./data/registro.json",json)
}

module.exports = {
    leer,
    guardarArchivo
}