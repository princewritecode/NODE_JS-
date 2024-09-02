import express from "express";
import morgan from "morgan";
import logger from "./middleware.js";
const app = express();
const port = 3000;

app.use(logger);

app.get("/", (req, res) =>
{
  res.send("Hello");
});

app.get('/about', (req, res) =>
{
  console.log('about route hit');
  res.send('About');
});

app.listen(port, () =>
{
  console.log(`Listening on port ${port}`);
});
