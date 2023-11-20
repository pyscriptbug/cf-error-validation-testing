import { errorCodes } from "./errorCodes.js";
import { errorMap } from "./errorMessages.js";

// Declara una nueva clase llamada `KittenError` que hereda las propiedades de la clase predefinida `Error`
export class KittenError extends Error {
    constructor(code) {
        const errorData = errorMap[code]

        super(errorData.message)
        this.errorCode = code
        this.statusCode = errorData.statusCode
    }
}

// Declaramos tres clases personalizada basada en la clase `KittenError`, una para cada posible código de error
export class ExplodingKittenError extends KittenError {
    constructor() {
        super(errorCodes.GATITO_EXPLOSIVO)
    }
}

export class ImplodingKittenError extends KittenError {
    constructor() {
        super(errorCodes.GATITO_IMPLOSIVO)
    }
}

export class BarkingKittenError extends KittenError {
    constructor() {
        super(errorCodes.GATITO_QUE_LADRA)
    }
}