'use strict';

var express = require('express');
var models = require('../models/todos')
var router = express.Router();
module.exports = router;

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get('/users', function(req, res){
   var arr = models.listPeople()
    res.send(arr)
    });
    

router.get('/users/:name/tasks', function(req, res) {
    //   console.log('entraste a la pagina de usuarios')
    var name = req.params.name
    //   console.log(name)
    var list = models.list(name)
    //   console.log(list)
    res.send(list)
    });

// EL METODO POST NO FUNCIONA 
    router.post('/users/:name/tasks', function(req, res) {
        var name = req.params.name;
        var task = req.body.text;

        console.log(name)
        console.log(task)
        console.log(fields)


        models.add(name, task);
        res.status(201);
        res.send(req.body);
        
      })






