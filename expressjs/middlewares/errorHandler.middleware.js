import { BarkingKittenError, ExplodingKittenError, ImplodingKittenError } from "../exceptions/customErrors.js"

export function errorHandler(error, req, res, next) {
    console.error(error)

    if (error instanceof ExplodingKittenError) {
        res.status(400)
    } else if (error instanceof ImplodingKittenError) {
        res.status(401)
    } else if (error instanceof BarkingKittenError) {
        res.status(404)
    }

    // next()

    res.send({ message: error })
}