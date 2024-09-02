import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) =>
{
  console.log('route home hit');
  res.sendFile(__dirname + '/public/index.html');
});
app.post('/submit', (req, res) =>
{
  const pet = req.body.pet;
  const street = req.body.street;
  console.log(pet, street);
  res.send(`Thanks for submitting the form! ${pet} ${street}`);
});
app.listen(port, () =>
{
  console.log(`Listening on port ${port}`);
});
