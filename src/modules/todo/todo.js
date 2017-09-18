import angular from 'angular';
import '../../style/app.css';

const STATE_DELETED = -1;
const STATE_DEFAULT = 0;
const STATE_DONE = 1;

class MainController {
  constructor(TodoService) {
    TodoService.$create('Lorem Ipsum', 'some description required');
    this.todos = TodoService.$get();
  }
}

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.createdOn = new Date().valueOf();
    this.state = STATE_DEFAULT;
  }
}

let TodoService = () => {

  const todos = {};

  function $create(title, description) {
    todos[Object.keys(todos).length] = new Todo(title, description);
    return service;
  }

  function $add(todo) {
    todos[Object.keys().length] = todo;
    return service;
  }

  function $get(id) {
    return id ? todo[id]: todos;
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
  .controller('MainController', ['TodoService', MainController])
  .factory('TodoService', TodoService);

export default MODULE_NAME;