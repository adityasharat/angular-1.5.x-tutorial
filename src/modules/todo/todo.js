import angular from 'angular';
import '../../style/app.css';

function randomString(length, limit) {
  let str = [];
  limit = typeof limit === 'number' ? limit : 100;
  for (let i = 0; i < length; ++i) {
    let random = Math.floor(Math.random() * limit);
    str.push(String.fromCharCode(random));
  }
  return str.join('');
}

function mock(count) {
  const todos = [];
  while(count-- > 0) {
    todos.push({
      title: randomString(20),
      description: randomString(80)
    })
  }
  return todos;
}

class MainController {
  constructor() {
    this.todos = mock(5);
  }
}

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
  .controller('MainController', MainController);

export default MODULE_NAME;