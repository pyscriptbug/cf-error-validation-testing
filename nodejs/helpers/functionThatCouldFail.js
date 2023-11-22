export function functionThatCouldFail(shouldFail = false) {
    // Todo el código en esta función es síncrono
    console.log("Hola, soy una línea de código que se ejecuta de manera síncrona 😎")

    if (shouldFail) {
        // Arroja el error explícito en la aplicación

        // ✅ Forma correcta de arrojar un error
        throw new Error("Soy una función rota 💔")

        // ❌ No tiene stacktrace
        // throw "Soy una función rota 💔"
    }
}
