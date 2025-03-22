require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Node.js App</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a simple HTML response from a Node.js API.</p>
        </body>
        </html>
    `);
});
app.get('/api/health', (req, res) => {
    res.status(200).json({message: "Successfully working", status: 200});
});


app.get('/api', (req, res) => {
    res.json({ message: 'Hello, World! shubham', S3_BUCKET:process.env.S3_BUCKET });
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World! shubham',S3_BUCKET:process.env.S3_BUCKET });
});
app.get('/api/hello/1', (req, res) => {;
    res.json({ message: 'Hello, World! shubham',S3_BUCKET:process.env.S3_BUCKET });
});

app.get('/api/hello/name', (req, res) => {;
    res.json({ message: 'Hello, World! shubham',S3_BUCKET:process.env.S3_BUCKET });
});



app.listen(process.env.PORT, () => {
    console.log(process.env.S3_BUCKET)
    console.log(`Server is running on port localhost:3000/api`);
});