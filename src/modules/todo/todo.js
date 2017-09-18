import angular from 'angular';
import '../../style/app.css';

class MainController {
  constructor() {
    this.todos = [];
  }
}

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

let TodoService = () => {

  const todos = {};

  function $create(title, description) {
    todos[Object.keys().length] = new Todo(title, description);
    return service;
  }

  function $add(todo) {
    todos[Object.keys().length] = todo;
    return service;
  }

  function $get(id) {
    return id ? todos : todo.id;
  }

  function $update(todo) {
    todos[todo.id] = todo;
    return service;
  }

  function $delete(id) {
    let todo = todos[id];
    delete todos[id];
    return todo;
  }

  const service = { $create, $add, $get, $update, $delete };

  return service;
};

let todo = () => {
  return {
    template: require('./todo.html'),
    controller: 'MainController',
    controllerAs: 'main'
  }
};

const MODULE_NAME = 'todo';

angular.module(MODULE_NAME, ['todo'])
  .directive('todo', todo)
  .controller('MainController', MainController)
  .factory('TodoService', TodoService);

export default MODULE_NAME;