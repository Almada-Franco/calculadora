const sumar = require("./modulos/suma")
const restar = require("./modulos/resta")
const dividir = require("./modulos/division")
const multiplicar = require("./modulos/multiplicar")

const {leer, guardarArchivo} = require("./modulos/leeryescribir")

let archivo = leer()


   function calcular (numero1,numero2,cb){
      let resultado = cb(numero1,numero2)
  
      if(cb == sumar) operador = "sumar"
      if(cb == restar) operador = "restar"
      if(cb == dividir) operador = "dividir"
      if(cb == multiplicar) operador = "multiplicar"
   let objeto = {
      operador: process.argv[4],
      resultado: resultado
   }
   archivo.push(objeto)
   guardarArchivo(archivo)
      return resultado
  }
  
  numero1 = +process.argv[2]
  numero2 = +process.argv[3]
 operador = process.argv[4]

  console.log(calcular(numero1,numero2,restar))