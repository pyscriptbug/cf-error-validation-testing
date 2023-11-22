import { functionThatCouldFail } from "./helpers/functionThatCouldFail.js"

// process.on("uncaughtException", (e, o) => {
//     console.error(e, o)
// })

// Declara la función principal o punto de acceso a nuestra aplicación
function main() {
    console.log("Comienza ejecución síncrona! ⏲️")

    try {
        // logica acá
        functionThatCouldFail(true)
        // otra lógica acá
    } catch (e) {
        console.error(e)
    }

    console.log("Función completada! 🚀")
}


// Ejecuta la función principal por defecto
main()