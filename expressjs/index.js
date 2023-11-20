import { initExpress, registerRouter, startServer } from "./app.js";
import { usersRouter } from "./routes/users.router.js";

async function main() {
    initExpress()

    registerRouter("/users", usersRouter)

    startServer()
}

main().catch(e => {
    console.error("Application crashed with error:\n" + e)
})