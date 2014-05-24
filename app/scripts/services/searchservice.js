'use strict';

angular.module('motoApp')
  .service('Search', function Search($http, $q) {

    return {
        getAdds: function(){

            var deferred = $q.defer();

            $http({method: 'GET', url: 'http://localhost:9001/search/'})   // for local host
                .success(function(data){
                    deferred.resolve(data);
                }).error(function(err) { console.log(err) });




//            $http({method: 'GET', url: 'http://www.utahmotomarket.com/search/'})
//                .success(function(data){
//                    deferred.resolve(data);
//                });

            return deferred.promise;
        },



    }




  });
