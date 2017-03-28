'use strict';

/**
 * @ngdoc service
 * @name miappApp.pokemonservice
 * @description
 * # pokemonservice
 * Service in the miappApp.
 */
angular.module('miappApp')
  .service('pokemonservice', function (Config, $q, $http, $routeParams){
    // AngularJS will instantiate a singleton by calling "new" on this function

    function listado(){
    	var deferred = $q.defer();

      	$http.get(Config.POKE) //config
    		.then(function(response){

          console.log(response);
          
    			deferred.resolve(response);
    		});

    	 return deferred.promise;
    }


   function listadoporid(){
      var deferred = $q.defer();

        var link = Config.TIPO+'/'+ $routeParams.id;
        $http.get(link) //config
        .then(function(response){

          deferred.resolve(response);
        });  

       return deferred.promise;
    }
 

  function detalleporid(){
      var deferred = $q.defer();
        var link = Config.DET+ $routeParams.id;
        $http.get(link) //config
        .then(function(response){
          deferred.resolve(response);
          
          console.log('Response de Detalle');
          console.log(response);


        });  

       return deferred.promise;
    }


  

	return {
    	listado: listado,
      listadoporid: listadoporid,
      detalleporid: detalleporid,
    }



  });
