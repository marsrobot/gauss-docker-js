'use strict';

const express = require('express');
const app = express();
app.use(express.json())

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.get('/ping', (req, res) => {
    return res.send('pong');
});

app.get('/hello-world', (req, res) => {
    var nameVal = '';
    if (typeof req.param('name') === undefined) {
        nameVal = 'Stranger';
    } else {
        nameVal = req.param('name');
    }
    var id = Math.floor(Math.random() * 1000000000);
    var js = { 'id': id, 'name': nameVal };
    return res.send(JSON.stringify(js));
});

app.post('/sum', (req, res) => {
    var sum = parseInt(req.body['x']) + parseInt(req.body['y']);
    var js = { 'sum': sum }
    return res.send(JSON.stringify(js));
});

app.listen(PORT, HOST, () => console.log(`Hello world app listening on port ${PORT}!`));