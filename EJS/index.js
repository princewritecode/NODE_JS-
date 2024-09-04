import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const date = new Date();
let day = date.getDay();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('view engine', 'ejs');
app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (req, res) =>
{
    console.log(req.body);
    res.render(__dirname + '/views/home.ejs', { day: day });
});

app.listen(3000, (req, res) =>
{
    console.log('server is running');
});

