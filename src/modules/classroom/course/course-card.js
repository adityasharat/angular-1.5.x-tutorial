
class CourseCardController {
  constructor(CourseService) {

  }
}

function coursecard() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      course: '=ccCourse'
    },
    template: require('./course-card.html'),
    controller: 'CourseCardController',
    controllerAs: 'card',
  }
}

export { CourseCardController, coursecard };