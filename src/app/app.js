import angular from 'angular';
import todo from '../modules/classroom/classroom';

import '../style/fa/css/font-awesome.min.css';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['classroom'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;