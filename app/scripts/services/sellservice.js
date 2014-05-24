'use strict';

angular.module('motoApp')
  .service('Sell', function Sell($http, $q) {



        return {
            postAdd: function(){

                var newAdd = function(sellerName, sellerPhone, sellerEmail, bikeMake, bikeModel, bikeYear, bikeMileage, bikePrice,
                         bikeTitle, bikeDescription) {

                    var newListing = { name: sellerName, phone: sellerPhone, email: sellerEmail , make: bikeMake,
                        model:bikeModel, year:bikeYear, mileage:bikeMileage, price:bikePrice, title:bikeTitle, description:bikeDescription,};
                    return(newListing);
                }


                var deferred = $q.defer();

                $http.post('www.utahmotomarket.com/saveAdd/', newAdd)  // for local host 'http://localhost:9001/saveAdd/'
                    .success(function(data){
                        deferred.resolve(data);
                        alert("the post worked", data)
                    });

//            $http({method: 'POST', url: 'www.utahmotomarket.com/saveAdd/'})
//                .success(function(data){
//                    deferred.resolve(data);
//                });

                return deferred.promise;
            },



        }


     });
