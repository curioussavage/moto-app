'use strict';

angular.module('motoApp')
  .service('Sell', function Sell() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        return {
            postAdd: function(){

                var deferred = $q.defer();

                $http({method: 'POST', url: 'http://localhost:9001/saveAdd/'})
                    .success(function(data){
                        deferred.resolve(data);
                    });

//            $http({method: 'POST', url: 'www.utahmotomarket.com/search/'})
//                .success(function(data){
//                    deferred.resolve(data);
//                });

                return deferred.promise;
            },



        }


     });
