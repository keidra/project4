var app = angular.module('ProductApp', ['ui.router', 'ProductCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/404');

    $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/products.html',
    controller: 'HomeCtrl'
  })

  $stateProvider
  .state('productList', {
    url: '/',
    templateUrl: 'app/views/products.html',
    controller: 'HomeCtrl'
  })
  .state('newProduct', {
    url: '/products/new',
    templateUrl: 'app/views/newProduct.html',
    controller: 'NewCtrl'
  })
  .state('productShow', {
    url: '/products/:id',
    templateUrl: 'app/views/showProduct.html',
    controller: 'ShowCtrl'
  })
   $stateProvider
  .state('favorites', {
    url: '/favorites',
    templateUrl: 'app/views/favorites.html', 
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/userSignup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/userLogin.html',
    controller: 'LoginCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);
