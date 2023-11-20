// Declara la función principal o punto de acceso
export function promisedFunction() {

    // El código de esta función se ejecutará de forma asíncrona
    // La función devolverá una Promesa
    return new Promise((resolve, reject) => {

        // Simula código asíncrono agregando 3 segundos de retardo en la ejecución
        setTimeout(() => {
            console.log("Hola, soy una línea de código que se ejecuta de manera asíncrona 😴")
            //TODO: Simular falla rechazando la promesa

            //TODO: Simular falla arrojando un error

            // La promesa resuelve a `true` una vez terminado el retardo de 3 segundos
            resolve(true)
        }, 3000 //ms
        )
    })
}
