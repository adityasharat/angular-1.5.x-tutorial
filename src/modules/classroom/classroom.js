import angular from 'angular';
import { CourseService } from './services/course-service'

class MainController {
  constructor(CourseService) {
    console.log(CourseService);
  }
}

const classroom = () => {
  return {
    template: require('./classroom.html'),
    controller: 'MainController',
    controllerAs: 'main'
  };
}

const MODULE_NAME = 'classroom';

angular.module(MODULE_NAME, [])
  .factory('CourseService', CourseService)
  .directive('classroom', classroom)
  .controller('MainController', ['CourseService', MainController]);


export default MODULE_NAME;