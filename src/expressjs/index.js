import { initExpress, registerRouter, startServer } from "./app.js";
import { catsRouter } from "./routes/cats.router.js";
import { rootRouter } from "./routes/root.router.js";

async function main() {
    initExpress();

    registerRouter("/cats", catsRouter);
    registerRouter("/", rootRouter);

    await startServer();
}

main().catch((e) => {
    console.error("Application crashed with error:\n" + e);
});
