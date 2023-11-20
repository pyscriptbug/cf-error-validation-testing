import { initExpress, registerRouter, startServer } from "./app.js";
import { catsRouter } from "./routes/cats.router.js";

async function main() {
    initExpress();

    registerRouter("/cats", catsRouter);
    registerRouter("/", rootRouter);

    startServer();
}

main().catch((e) => {
    console.error("Application crashed with error:\n" + e);
});
