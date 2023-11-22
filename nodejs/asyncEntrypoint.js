import { promiseThatCouldFail } from "./helpers/promiseThatCouldFail.js"

// Declara la función principal o punto de acceso a nuestra aplicación
async function main() {

    console.log("Comienza ejecución asíncrona! ⏲️")

    // ❌ Try catch no maneja errores fuera del contexto inmediato de ejecución
    try {
        // Ejecuta y espera por el resultado de la promesa
        await promiseThatCouldFail(true)
    } catch (e) {
        console.error(e)
    }

    console.log("Promesa completada! ⏰")
}


// Ejecuta la función principal por defecto
main()