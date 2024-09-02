// import express from "express";
// const app = express();
// const port = 3000;
// app.listen(port, () =>
// {
//   console.log(`Server running on port ${port}.`);
// });
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) =>
{
  console.log(req);
  console.log(res);
  res.send('Hello World!');
});

app.listen(port, () =>
{
  console.log(`Server running on port ${port}`);
});


