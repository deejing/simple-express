const express = require('express');
const app = express();
const path = require('path');
const crypto = require('./crypto.js');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/hello-data', (req, res) => {
    const inputData = parseFloat(req.body.data);

    console.log(inputData);

    const returData = crypto.multiply5(inputData);

    res.json({data: returData});
});

app.get('/hello-get', (req, res) => {

    const inputData = req.query.data;
    const returData = crypto.doSomeStuff(inputData);
    
    res.json({data: returData});
});

app.listen(1234, () => {
    console.log('viewed at http://localhost:1234');
});