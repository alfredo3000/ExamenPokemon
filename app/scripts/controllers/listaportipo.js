'use strict';

/**
 * @ngdoc function
 * @name pokemonApp.controller:ListaportipoCtrl
 * @description
 * # ListaportipoCtrl
 * Controller of the pokemonApp
 */
angular.module('miappApp')
  .controller('ListaportipoCtrl', function ($scope, pokemonservice, tiposervice) {

  	console.log('En ListaportipoCtrl 0');

 	tiposervice.listado() //Llena la lista
        .then(function(response){
          $scope.tipos = response.data.results;
     });

    pokemonservice.listadoporid()
  			.then(function(response){
  				console.log('En ListaportipoCtrl 1');
  				$scope.pokemones = response.data.results;
  				console.log('En ListaportipoCtrl 2');

  			});  


  });
