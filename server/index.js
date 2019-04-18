const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = 8000;
const exposeRoutes = require("./routes/index");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

const games = [];

exposeRoutes(app, games);

app.get('/', function (req, res) {
    // res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/index.html'));
})

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    /* eslint-disable no-console */
});

module.exports = server;