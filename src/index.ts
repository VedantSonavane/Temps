import { Hono } from "hono";
const app = new Hono();

app.get("/status", (c) => {
  return c.json({ message:"server is running successfully" });
});

app.get("/", (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Temps</title>
      </head>
      <body>
        <h1>Temps</h1>
        <p>Calculate your time</p>
        <form action="/calculate" method="GET">
          <label for="text">Text</label>
          <input type="text" name="text" id="text" />
          <label for="wpm">Words per minute</label>
          <input type="number" name="wpm" id="wpm" />
          <button type="submit">Calculate</button>
        </form>
      </body>
    </html>
  `);
});

app.get("/calculate", (c) => {
    const text = c.req.query("text");
    const wpm = c.req.query("wpm");
    return c.json(  
        { message:text,wpm }  
    );
});

app.get("/calculate", (c) => {
  const text =c.req.query("text");
  const wpm = c.req.query("wpm");
  return c.json({ message:text,wpm });
});

export default app;