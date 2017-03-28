'use strict';

/**
 * @ngdoc service
 * @name miappApp.Config
 * @description
 * # Config
 * Constant in the miappApp.
 */
angular.module('miappApp')
  .constant('Config', {
  	POKE: 'https://pokeapi.co/api/v2/pokemon/?limit=1000',
  	TIPO: 'https://pokeapi.co/api/v2/type',
    DET: 'https://pokeapi.co/api/v2/pokemon/',
  });
