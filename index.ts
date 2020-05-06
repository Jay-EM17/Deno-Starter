import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "./config.ts";
import { router } from "./routing.ts";
import { notFound } from "./handlers/notfound.ts";
import { errorMiddleware } from "./middlewares/error.ts";

const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on ${config.APP_PORT}..`);
await app.listen(`${config.APP_HOST}:${config.APP_PORT}`);
