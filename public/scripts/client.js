var app = angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/archer', {
    templateUrl:'views/archery.html',
    controller:'ArcheryController'

  });


  $locationProvider.html5Mode(true);
});

angular.module('routeApp').controller('ArcheryController', function($scope, $http){
  $http.get('/archer').then(function(response){
    console.log(response);
    $scope.archer = ('Archer is ' + response.data);
  })
});

angular.module('routeApp').controller('GreenController', function($scope){

});

angular.module('routeApp').controller('BlueController', function($scope){

});

angular.module('routeApp').controller('OrangeController', function($scope){

});
