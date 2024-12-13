const {registar,leer} = require("./operaciones")

let opcion = process.argv[2]
let nombreAnimal = process.argv[3]
let edad = process.argv[4]
let tipoAnimal = process.argv[5]
let color = process.argv[6]
let enfermedad = process.argv[7]

if(opcion == "registrar"){
    registar(nombreAnimal,edad,tipoAnimal,color,enfermedad);
}

if(opcion == "leer"){
 leer()   
}