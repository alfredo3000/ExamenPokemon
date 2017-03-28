'use strict';

/**
 * @ngdoc function
 * @name pokemonApp.controller:DetallepokemonCtrl
 * @description
 * # DetallepokemonCtrl
 * Controller of the pokemonApp
 */
angular.module('miappApp')
  .controller('DetallepokemonCtrl', function ($scope, pokemonservice) {
  
 	
    pokemonservice.detalleporid()
  			.then(function(response){
  				$scope.detalle = response.data;
  			});   


  });
