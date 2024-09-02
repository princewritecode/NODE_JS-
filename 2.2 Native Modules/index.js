const fs = require("fs");
console.log(fs);
fs.writeFile('Message.txt', "This is inside the file message txt hello from node js", (err) =>
{
    if (err) throw err;
    else
    {
        console.log("File has been written and savedcl");
    }
});
fs.readFile('Message.txt', 'utf8', (err, data) =>
{
    if (err) throw err;
    else
    {
        console.log(data);
    }
});