import { errorCodes } from "./errorCodes.js"

// Declara un objeto cuya clave es el código del error y el valor el mensaje descriptivo
export const errorMap = {
    [errorCodes.GATITO_EXPLOSIVO]: { statusCode: 500, message: "Un gatito se ha quedado dormido en el teclado y presionó la tecla de autodestrucción" },
    [errorCodes.GATITO_IMPLOSIVO]: { statusCode: 500, message: "Entramos en una realidad alterna donde no existen los gatos. La aplicación se deprimió y dejó de funcionar" },
    [errorCodes.GATITO_QUE_LADRA]: { statusCode: 500, message: "La aplicación ha escuchado un gato que ladra, en medio de la confusión decidió dejar de funcionar" },
}