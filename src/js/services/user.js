function userModel(){
  var user = {
    email: "",
    password: ""
  }

  return {
    getUser: function(){
      return user;
    },
    setUser: function(input){
      user = input;
    },

    getEmail: function(){
      return user.email;
    },
    setEmail: function(input){
      user.email = input;
    },
    
    getPassword: function(){
      return user.password;
    },
    setPassword: function(input){
      user.password = input;
    }
  }
}
