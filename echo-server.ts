import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const resp = `
        <html>
            <head>
                <title>Deno App</title>
            </head>
            <body>
                <div style="text-align:center;">
                    <h1>
                        Hello World !
                    </h1>
                </div>
            </body>
        </html>
`;

app.use((ctx) => {
  ctx.response.body = resp;
});

await app.listen({ port: 8090 });
