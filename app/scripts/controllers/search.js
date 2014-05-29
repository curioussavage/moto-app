'use strict';



angular.module('motoApp')
  .controller('SearchCtrl', function ($scope, adds, makeAndModel, Search ) {
        $scope.makesAndModels = makeAndModel.makesAndModels;

        $scope.search = {};

        $scope.searchresults = adds;

        $scope.submit = function (search) {
            console.log(search)
            Search.searchAdds(search, function(err, data) {
                if (err) {alert(err)}
                $scope.searchresults = data
            });
        }

//        for testing of the ng-repeat
//        $scope.searchresults = [{title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//            {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//            {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"}]


  });


