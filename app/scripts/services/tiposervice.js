'use strict';

/**
 * @ngdoc service
 * @name pokemonApp.tiposervice
 * @description
 * # tiposervice
 * Service in the pokemonApp.
 */
angular.module('miappApp')
  .service('tiposervice', function (Config, $q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function listado(){
    	var deferred = $q.defer();

      	$http.get(Config.TIPO) //config
    		.then(function(response){

          console.log(response);
          
    			deferred.resolve(response);
    		});  

    	 return deferred.promise;
    }
 
  
 
	return {
    	listado: listado,
    }


  });
