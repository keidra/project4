var app = angular.module('ProductApp', ['ui.router', 'ProductCtrls']);


app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/404');
  $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider
    .state('home', {
    url: '/',
    templateUrl: 'app/views/beforeSignup.html',
    controller: 'HomeCtrl'
  })
  .state('aftersignup', {
    url: '/start',
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  })
  .state('paleo', {
    url: '/paleo',
    templateUrl: 'app/views/paleo.html',
    controller: 'HomeCtrl'
  })
  .state('gluten', {
    url: '/glutenfree',
    templateUrl: 'app/views/glutenfree.html',
    controller: 'HomeCtrl'
  })
  .state('dairy', {
    url: '/dairyfree',
    templateUrl: 'app/views/dairyfree.html',
    controller: 'HomeCtrl'
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
}])
