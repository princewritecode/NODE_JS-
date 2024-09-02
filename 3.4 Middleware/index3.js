import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const logger = (req, res, next) =>
{
  console.log(`This is logger middleware ${req.method} ${req.url}`);
  next();
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.get('/about', (req, res) =>
{
  res.sendFile(__dirname + '/public/index.html');
});
app.post('/submit', (req, res) =>
{
  console.log(req.body.pet, req.body, req.body.street);
  res.send("Thanks for submitting the form!");
});
app.get("/", (req, res) =>
{
  res.send("Hello");
});
app.listen(port, () =>
{
  console.log(`Listening on port ${port}`);
});
