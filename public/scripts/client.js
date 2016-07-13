angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/red', {
    templateUrl:'views/red.html',
    controller:'RedController'

  })
  .when('/green', {
    templateUrl:'views/green.html',
    controller:'GreenController'
  })
  .when('/blue', {
    templateUrl:'views/blue.html',
    controller:'BlueController'
})

.when('/orange', {
  templateUrl:'views/orange.html',
  controller:'OrangeController'

});

$locationProvider.html5Mode(true);
});

app.module('routeApp').controller('RedController', function($scope){

});

app.module('routeApp').controller('GreenController', function($scope){

});

app.module('routeApp').controller('BlueController', function($scope){

});

app.module('routeApp').controller('OrangeController', function($scope){

});
