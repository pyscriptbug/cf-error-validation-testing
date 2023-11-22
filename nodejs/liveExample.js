import { promiseThatCouldFail } from "./helpers/promiseThatCouldFail.js"

class CustomError extends Error {
    constructor(message, code) {
        super(message)
        this.code = code
    }
}

// Declara la función principal o punto de acceso a nuestra aplicación
async function main() {
    console.log("Comienza ejecución asíncrona! ⏲️")

    promiseThatCouldFail(true)
        .then((result) => {
            console.log({ result })
            // console.log("Promesa completada! ⏰")
        })
        .catch((e) => {
            // console.error(e)
            throw new CustomError("Falló validación", 400)
        })

    // try {
    //     // Ejecuta y espera por el resultado de la promesa
    //     await promiseThatCouldFail(true)
    // } catch (e) {
    //     console.error(e)
    // }

    console.log("Promesa completada! ⏰")
}


// Ejecuta la función principal por defecto
main()
