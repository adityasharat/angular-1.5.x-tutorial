import angular from 'angular';
import '../../style/app.css';

class MainController {
  constructor() {
    this.todos = [];
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