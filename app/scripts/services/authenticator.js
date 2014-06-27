'use strict';

angular.module('motoApp')
  .service('Authenticator', function Authenticator() {

        return {


            logInUser: function(listing){
                    console.log(listing);



                    var deferred = $q.defer();

                    $http.post('http://localhost:9001/listing/' )  // for local host
                        .success(function(data){
                            deferred.resolve(data);

                        });



                    return deferred.promise;
                },
            createUser: function(listing){
                console.log(listing);



                var deferred = $q.defer();

                $http.post('http://localhost:9001/listing/' )  // for local host
                    .success(function(data){
                        deferred.resolve(data);

                    });



                return deferred.promise;
            },





        }

  });
