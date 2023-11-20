// Declara función que retorna una Promesa y que puede fallar
export function promisedFunction(shouldFail = false) {

    // El código de esta función se ejecutará de forma asíncrona
    // La función devolverá una Promesa
    return new Promise((resolve, reject) => {

        // Simula código asíncrono agregando 3 segundos de retardo en la ejecución
        setTimeout(() => {
            console.log("Hola, soy una línea de código que se ejecuta de manera asíncrona 😴")

            if (shouldFail) {
                //TODO: Simular falla arrojando un error en lugar de rechazar la promesa

                reject()
            } else {

                // Resuelve la promesa una vez terminado el retardo de 3 segundos
                resolve()
            }

        }, 3000 //ms
        )
    })
}
