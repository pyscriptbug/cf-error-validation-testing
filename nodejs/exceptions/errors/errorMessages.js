import { errorCodes } from "./errorCodes.js"

// Declara un objeto cuya clave es el código del error y el valor el mensaje descriptivo
export const errorMessages = {
    [errorCodes.GATITO_EXPLOSIVO]: "Un gatito se ha quedado dormido en el teclado y presionó la tecla de autodestrucción",
    [errorCodes.GATITO_IMPLOSIVO]: "Entramos en una realidad alterna donde no existen los gatos. La aplicación dejó de funcionar por culpa de la depresión",
    [errorCodes.GATITO_QUE_LADRA]: "La aplicación ha escuchado un gato que ladra, en medio de la confusión decidió dejar de funcionar",
}