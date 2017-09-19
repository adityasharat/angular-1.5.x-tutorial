import angular from 'angular';

const STATE_DELETED = -1;
const STATE_DEFAULT = 0;
const STATE_DONE = 1;

class MainController {
  constructor(TodoService) {

    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 1 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 2 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 3 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 4 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 5 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 6 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 7 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 8 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 9 '));
    TodoService.$create('Lorem Ipsum', new Array(10).join('some description required 0 '));

    this.todos = TodoService.$get();

    this.delete = (id) => {
      TodoService.$delete(id);
    };

    this.add = () => {
      TodoService.$create('<title>','<description>');
    }
  }
}

class Todo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdOn = new Date().valueOf();
    this.state = STATE_DEFAULT;
  }
}

let TodoService = () => {

  const todos = {};

  function $create(title, description) {
    todos[Object.keys(todos).length] = new Todo(Object.keys(todos).length, title, description);
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