import express from 'express';
const app = express();

app.get('/', (req, res) =>
{
    res.send('<h1>Hello world</h1>');
});
app.get('/about', (req, res) =>
{
    res.send('<h1>About Me</h1><p>My name is Prince</p>');
});
app.get('/contact', (req, res) =>
{
    res.send('<h1>Contact Me</h1><p>Phone: +44123456789</p>');
});
app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
});