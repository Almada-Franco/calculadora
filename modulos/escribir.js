const fs = require('fs')

function guardarArchivo(arraydeobjetos){
    let pasarAJson = JSON.stringify(arraydeobjetos)
   let escribirArchivo = fs.writeFileSync("../data/registro.json",pasarAJson)
   return escribirArchivo
} 

module.exports = guardarArchivo()
