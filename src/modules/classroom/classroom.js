import angular from 'angular';
import { CourseService } from './services/course-service';
import { CourseCardController, coursecard } from './course/course-card';

function mock(CourseService) {
  CourseService.$create('react', 'React JS', `React is completely transforming the Front-End
    Development landscape. Come master this powerful UI library from Facebook, and learn career-ready
    skills with Udacity and the experts from React Training`, []);

  CourseService.$create('android-for-beginnera', 'Android Development for Beginners', `Learn the basics
    of Android and Java programming, and take the first step on your journey to becoming an Android developer!`, []);
}

class MainController {
  constructor(CourseService) {
    mock(CourseService);
    this.courses = CourseService.$get();
  }
}

const classroom = () => {
  return {
    restrict: 'E',
    replace: true,
    template: require('./classroom.html'),
    controller: 'MainController',
    controllerAs: 'main'
  };
}

const MODULE_NAME = 'classroom';

angular.module(MODULE_NAME, [])
  .factory('CourseService', CourseService)
  .directive('classroom', classroom)
  .directive('coursecard', coursecard)
  .controller('CourseCardController', CourseCardController)
  .controller('MainController', MainController);


export default MODULE_NAME;