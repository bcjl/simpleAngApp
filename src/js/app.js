angular.module('SimpleApp', [
  'ngRoute',
  'mobile-angular-ui',
])

.config(function($routeProvider) {

  $routeProvider

  .when('/login', {
    templateUrl:'login.html',
    controller: 'LoginController'
  })

  .when('/', {
    templateUrl:'home.html',
    controller: 'PaymentsController'
  })

  .when('/about', {
    templateUrl:'about.html'
  })
  .otherwise({ redirectTo: '/'});
  
})

// Checks before any route change that user is logged in
.run( function($rootScope, $location){

  $rootScope.$on("$routeChangeStart", function(event, next, current){
    //Prevents users from accessing any page besides login if not logged in
    if( $rootScope.loggedIn === false || $rootScope.loggedIn === undefined){
      if(next.templateUrl !== "/login"){
        $location.path("/login");
      }
    }
  });
})

.controller('MainController', MainController)
.controller('LoginController', LoginController)
.controller('PaymentsController', PaymentsController)
.factory('userModel', userModel)
