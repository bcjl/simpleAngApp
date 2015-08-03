function LoginController($scope, $http, $location, $rootScope, userModel){
  $scope.user = userModel.getUser();
  $scope.errorMessage = "";

  $scope.signin = function(){
    var email = $scope.user.email;
    var password = $scope.user.password;

    var postData = {
      "email": email,
      "password": password
    }
    // Signin logic
    $http.post('/api/login', postData)
      .then(
      function(response){
        var success = response.data.success;
        var message = response.data.message;
        if(success){
          $rootScope.loggedIn = true;
          $location.path('/');  
        } else {
          $scope.errorMessage = message;
        }
      }, 
      function(errorResponse){
        console.log('ERROR', errorResponse);
      })


  }

}