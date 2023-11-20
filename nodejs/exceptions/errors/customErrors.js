import { errorCodes } from "./errorCodes.js";
import { errorMessages } from "./errorMessages.js";

// Declara una nueva clase llamada `CustomError` que hereda las propiedades de la clase predefinida `Error`
export class CustomError extends Error {
    constructor(code) {
        super(errorMessages[code])
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