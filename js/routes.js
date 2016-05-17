'use strict';

app.config(function($routeProvider) {
  $routeProvider
  .when('/week', {
    templateUrl: 'views/week.html',
    controller: 'MainController as MC'
  });
});
