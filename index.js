const express = require('express');
const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to inventory app');
})


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})