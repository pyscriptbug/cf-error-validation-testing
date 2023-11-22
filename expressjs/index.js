import { initExpress, registerRouter, startServer } from "./app.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { catsRouter } from "./routes/cats.router.js";
import { rootRouter } from "./routes/root.router.js";

async function main() {
    const app = initExpress();

    registerRouter("/cats", catsRouter);
    registerRouter("/", rootRouter);

    app.use(errorHandler)

    await startServer();
}

main().catch((e) => {
    console.error("Application crashed with error:\n" + e);
});
