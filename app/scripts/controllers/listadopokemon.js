'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:ListadopokemonCtrl
 * @description
 * # ListadopokemonCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('ListadopokemonCtrl', 
  		function ($scope, pokemonservice, tiposervice, $window) {
    

    tiposervice.listado()
        .then(function(response){
          $scope.tipos = response.data.results;
     });

    pokemonservice.listado()
  			.then(function(response){
  				$scope.pokemones = response.data.results;
  			});
  

     $scope.mostrarpokemon = function(id){
         
     
        $window.location.href = '#/listaportipo/'+ id;

     };
   


  });
