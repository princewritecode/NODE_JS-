const { clear } = require('console');
const fs = require('fs');
const input2 = fs.writeFile('input2.txt', 'welcome to input file created using node', (err) =>
{
    console.log(err);
});
console.log(input2);
fs.readFile('input.txt', 'utf-8', (err, data) =>
{
    if (err) throw err;
    console.log(data);
});

