const fs = require('fs')

function guardarArchivo(arraydeobjetos){
    let pasarAJson = JSON.stringify(arraydeobjetos)
    fs.writeFileSync("../data/registro.json",pasarAJson)

}

module.exports = guardarArchivo
