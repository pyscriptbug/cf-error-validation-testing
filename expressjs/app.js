import express from 'express'
import bodyParser from 'body-parser'
// import { errorHandler } from './middlewares/errorHandler.middleware.js'

/**
 * @type {Express}
 */
let app

export function initExpress() {
    app = express()

    app.use(bodyParser.json())

    // ❌ Middleware de errores debe ser el último middleware en ser agregado a nuestra app
    // app.use(errorHandler)

    return app
}

export function startServer(port = 3000) {
    return new Promise(resolve =>
        app.listen(port, () => {
            console.log(`Server listening on port ${port} 🚀`)
            resolve()
        }))
}

export function registerRouter(basePath, router, targetRouter = app) {
    targetRouter.use(basePath, router)

    return router
}