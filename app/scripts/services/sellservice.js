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

//                $http({
//                    url: 'www.utahmotomarket.com/saveAdd/',
//                    method: "POST",
//                    data: newListing,
//                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//                }).success(function (data, status, headers, config) {
//                    $scope.persons = data; // assign  $scope.persons here as promise is resolved here
//                }).error(function (data, status, headers, config) {
//                    $scope.status = status;
//                });


//            $http({method: 'POST', url: 'http://www.utahmotomarket.com/saveAdd/'})
//                .success(function(data){
//                    deferred.resolve(data);
//                });

                return deferred.promise;
            },



        }


     });
