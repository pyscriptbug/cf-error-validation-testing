import { promiseThatCouldFail } from "./helpers/promiseThatCouldFail.js"

// Declara la función principal o punto de acceso a nuestra aplicación
async function main() {

    console.log("Comienza ejecución asíncrona! ⏲️")

    // Ejecuta y espera por el resultado de la promesa
    await promiseThatCouldFail()

    console.log("Promesa completada! ⏰")
}


// Ejecuta la función principal por defecto
main()