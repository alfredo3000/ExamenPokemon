'use strict';

/**
 * @ngdoc overview
 * @name miappApp
 * @description
 * # miappApp
 *
 * Main module of the application.
 */
angular
  .module('miappApp', [
    'ngAnimate',
    'ngCookies',  
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/listadoPokemon', {
        templateUrl: 'views/listadopokemon.html',
        controller: 'ListadopokemonCtrl',
        controllerAs: 'listadoPokemon'
      })
      .when('/listaportipo/:id', { 
        templateUrl: 'views/listadopokemon.html',   
        controller: 'ListaportipoCtrl',
        controllerAs: 'listaportipo' 
      })
      .when('/detallepokemon/:id', {
        templateUrl: 'views/detallepokemon.html',
        controller: 'DetallepokemonCtrl',
        controllerAs: 'detallepokemon'
      })
      .otherwise({   
        redirectTo: '/'
      });
      $locationProvider.hashPrefix("");
  });
