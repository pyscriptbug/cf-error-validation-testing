export function functionThatCouldFail(shouldFail = false) {
    // Todo el código en esta función es síncrono
    console.log("Hola, soy una línea de código que se ejecuta de manera síncrona 😎")

    if (shouldFail) {
        // Arroja el error explícito en la aplicación
        throw new Error("Soy una función rota 💔")
    }
}
