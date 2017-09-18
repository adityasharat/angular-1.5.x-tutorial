;(function (angular, $) {

  const TodoApplication = angular.module('TodoApplication', []);

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
  
  TodoApplication.controller('HomeController', function($scope) {
    $scope.todos = mock(5);
  });

}(angular, $));