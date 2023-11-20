import { functionThatCouldFail } from "./helpers/functionThatCouldFail.js"

// Declara la función principal o punto de acceso a nuestra aplicación
function main() {
    console.log("Comienza ejecución síncrona! ⏲️")

    functionThatCouldFail()

    console.log("Función completada! 🚀")
}


// Ejecuta la función principal por defecto
main()