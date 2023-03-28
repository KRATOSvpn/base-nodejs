const express = require('express');
const app = express();

const port = 3000;
const domain = 'localhost';

app.get('/', (req, res) =>{
    res.send('App OK');
});

app.listen(3000, () => {
    console.log('Server is listening on address: http://'+domain+':'+port);
});