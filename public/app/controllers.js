angular.module('ProductCtrls', ['ProductServices'])
.controller('HomeCtrl', ['$scope', 'Product', function($scope, Product) {
  $scope.products = [];

  Product.query(function success(data) {
    $scope.products = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteProduct = function(id, productsIdx) {
    Product.delete({id: id}, function success(data) {
      $scope.products.splice(productsIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  }
}])

.controller('ShowCtrl', ['$scope', '$stateParams', 'Product', function($scope, $stateParams, Product) {
  $scope.product = {};

  Product.get({id: $stateParams.id}, function success(data) {
    $scope.product = data;
  }, function error(data) {
    console.log(data);
  });
}])
// .controller('NewCtrl', ['$scope', '$location', 'Product', function($scope, $location, Product) {
//   $scope.product = {
//     name: '',
//     ingredients: '',
//     image: '',
//     upc: '', 
//     category: ''
//   };

//   $scope.createProduct = function() {
//     Product.save($scope.product, function success(data) {
//       $location.path('/');
//     }, function error(data) {
//       console.log(data);
//     });
//   }
// }])
.controller('NavCtrl', ['$scope', 'Auth', '$state', 'Alerts', function($scope, Auth, $state, Alerts) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    Alerts.add('success', 'Logged out!');
    $state.reload();
  }
}])
.controller('SignupCtrl', ['$scope', '$http', '$location', 'Alerts', function($scope, $http, $location, Alerts) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res) {
      Alerts.add('success', 'Sign up successful!');
      $location.path('/');
    }, function error(res) {
      Alerts.add('danger', 'Error. See console');
      console.log(res);
    });
  }
}])
.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', 'Alerts', function($scope, $http, $location, Auth, Alerts) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      Alerts.add('success', 'Logged in!');
      console.log('Token:', res.data.token);
      $location.path('/start');
    }, function error(res) {
      Alerts.add('danger', 'Incorrect email/password');
      console.log(res);
    });
  }
}])
.controller('AlertCtrl', ['$scope', 'Alerts', function($scope, Alerts) {
  $scope.Alerts = Alerts;
}]);
