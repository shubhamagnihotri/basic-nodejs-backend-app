const express = require('express');
const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello, world! i am live now');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/api/health', (req, res) => {
    res.status(200);
});


app.listen(3000, () => {
    console.log(`Server is running on port localhost:3000/api`);
});