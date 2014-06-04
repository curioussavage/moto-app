'use strict';



angular.module('motoApp')
  .controller('SearchCtrl', function ($scope, adds, makeAndModel, Search ) {
        $scope.makesAndModels = makeAndModel.makesAndModels;

        $scope.search = {};

        $scope.searchresults = adds;
        console.log($scope.searchresults);

        $scope.searchDatabase = function (search) {
            console.log("searchDatabase called");
            Search.searchAdds(search).then(function(data){
                console.log(data)
                $scope.searchresults = data;   // data is being attached just fine but the ng-repeat is not iterating through it again.


            });







        }

//        for testing of the ng-repeat
//        $scope.searchresults = [{title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//            {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//            {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"}]


  });


