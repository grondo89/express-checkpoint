'use strict';

var peopleArray = []


var tasks = {} // acá vamos a guardar nuestras personas y tareas

module.exports = {
  reset: function () {
    peopleArray = []
    tasks = {}; // esta función ya esta armada :D
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listPeople: function () {
    return peopleArray
      // devuelve un arreglo de personas con tareas
  },
  add: function (name, task) {
    if(typeof task.complete == "undefined"){
      task.complete = false;
    }
    
    if(peopleArray.includes(name)){
  //    console.log("ya existe el nombre!")
      tasks[name].push(task)
    } else {
      peopleArray.push(name)
      var taskArr = [];
      taskArr.push(task);
      tasks[name] = taskArr
      }      
    return name
    // guarda una tarea para una persona en particular
  },
  list: function(name){
    return tasks[name]
  },
  complete: function(name, index){
    tasks[name][index].complete = true
  },
  remove: function(name, num){
    var removido = tasks[name].splice(num, 1) 
  }
  // etc.
};
