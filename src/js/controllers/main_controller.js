function MainController($scope, $http, $location, $rootScope, userModel){
  $scope.user = userModel.getUser();

  $scope.logout = function(){
    $rootScope.loggedIn = false;

    userModel.setEmail("");
    userModel.setPassword("");

    $location.path('/login');
  }

  $scope.showLogin = function(){
    $rootScope.loggedIn = false;
    $location.path('/login');
  }


}
