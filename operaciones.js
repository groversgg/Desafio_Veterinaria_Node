const fs = require("fs")

const registar = (nombreAnimal,edad,tipoAnimal,color,enfermedad)=>{
    const citas = fs.readFileSync("cita.json", "utf-8");
    let listParse = JSON.parse(citas)
    listParse.push({nombreAnimal,edad,tipoAnimal,color,enfermedad})
    fs.writeFileSync("cita.json",JSON.stringify(listParse))
}

const leer = () =>{
    const lista = fs.readFileSync("cita.json","utf-8");
    console.log(lista)
}

module.exports = {registar,leer}