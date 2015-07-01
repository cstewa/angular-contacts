'use strict';

angular.module('contactsApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'angularSpinner', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      }).state('add', {
        url:'/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl',
        controllerAs: 'addCtrl'
      })

    $urlRouterProvider.otherwise('/');
  })
;
