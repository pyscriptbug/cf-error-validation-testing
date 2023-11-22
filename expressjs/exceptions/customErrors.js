import { errorCodes } from "./errorCodes.js";
import { errorMap } from "./errorMap.js";

// Declara una nueva clase llamada `CustomError` que hereda las propiedades de la clase predefinida `Error`
export class CustomError extends Error {
    constructor(code) {
        const errorData = errorMap[code]

        super(errorData.message)
        this.errorCode = code
        this.statusCode = errorData.statusCode
    }
}

// Declaramos tres clases personalizada basada en la clase `CustomError`, una para cada posible código de error
export class ExplodingKittenError extends CustomError {
    constructor() {
        super(errorCodes.GATITO_EXPLOSIVO)
    }
}

export class ImplodingKittenError extends CustomError {
    constructor() {
        super(errorCodes.GATITO_IMPLOSIVO)
    }
}

export class BarkingKittenError extends CustomError {
    constructor() {
        super(errorCodes.GATITO_QUE_LADRA)
    }
}