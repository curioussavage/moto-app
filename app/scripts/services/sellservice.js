'use strict';

angular.module('motoApp')
  .service('Sell', function Sell($http, $q) {



        return {
            postAdd: function(listing){
                console.log(listing);



                var deferred = $q.defer();

                $http.post('http://localhost:9001/listing/', listing)  // for local host
                    .success(function(data){
                        deferred.resolve(data);
                        alert("the post worked", data)
                    });



                return deferred.promise;
            },



        }


     });
