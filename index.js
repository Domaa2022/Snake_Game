require('dotenv').config(); // load the env variables
const express = require ('express');
const app = express(); // create an instance of express


app.use(express.static(__dirname + '/public')); // serve the public directory

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});




