require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());


app.get('/api', (req, res) => {
    res.json({ message: 'Hello, World! shubham', S3_BUCKET:process.env.S3_BUCKET });
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World! shubham',S3_BUCKET:process.env.S3_BUCKET });
});
app.get('/api/hello/1', (req, res) => {;
    res.json({ message: 'Hello, World! shubham',S3_BUCKET:process.env.S3_BUCKET });
});

app.get('/api/health', (req, res) => {
    res.status(200);
});


app.listen(process.env.PORT, () => {
    console.log(process.env.S3_BUCKET)
    console.log(`Server is running on port localhost:3000/api`);
});