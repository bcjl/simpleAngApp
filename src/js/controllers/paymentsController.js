function PaymentsController($scope, userModel){
  $scope.user = userModel.getUser();

  // Stubbed payments info, would eventually replace with server GET
  $scope.payments = [
    { name: "Alan", amount: "1.00", date: "1-1-2015"}, 
    { name: "Bob", amount: "2.00", date: "2-11-2015"},
    { name: "Carol", amount: "5.00", date: "3-7-2015"},
    { name: "David", amount: "7.00", date: "7-7-2015"},
    { name: "Elliot", amount: "2.00", date: "8-11-2015"},
    { name: "Fred", amount: "1.50", date: "9-3-2015"},
    { name: "George", amount: "12.00", date: "10-11-2015"},
    { name: "Hilary", amount: "7.21", date: "11-7-2015"},
    { name: "Ian", amount: "13.07", date: "12-29-2015"},
    { name: "Jake", amount: "19.89", date: "1-9-2016"},
    { name: "Karen", amount: "5.00", date: "2-14-2016"},
    { name: "Lemmy", amount: "11.19", date: "2-29-2016"},
    { name: "Michael", amount: "21.00", date: "3-20-2016"},
    { name: "Ned", amount: "3.50", date: "4-1-2016"},
    { name: "Optimus", amount: "60.05", date: "4-9-2016"},    
    { name: "Pauline", amount: "6.25", date: "6-12-2016"},    
    { name: "Quid", amount: "1.00", date: "6-19-2016"},
    { name: "Rick", amount: "90.20", date: "7-4-2016"},
    { name: "Steve", amount: "1.00", date: "7-23-2016"},
  ];

  $scope.recipient = "";
  $scope.amount = 0;
}