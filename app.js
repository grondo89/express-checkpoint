'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var supertest = require('supertest');
const  nunjucks = require('nunjucks');
const morgan = require('morgan');
var app = express();
module.exports = app; // esto es solo para testear mas facil

const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public'))

// acuerdense de agregar su router o cualquier middleware que necesiten aca

// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.

var port = 3000

if (!module.parent){ app.listen(port);
    console.log(`Listening on port ${port}!`)
}

// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);
// nunjucks.configure('views', {noCache: true});

app.use('/',function (req, res, next) {
    console.log (req.method + req.url)
    next()
}) 

// app.use('/users', function (req, res, next) {
//     console.log ('llegaste a un área especial')
//     next()
// })
