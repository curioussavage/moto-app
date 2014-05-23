'use strict';

angular.module('motoApp')
  .controller('SearchCtrl', function ($scope, adds) {


        $scope.searchresults = adds;

//        for testing of the ng-repeat
//        $scope.searchresults = [{title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//            {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//            {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"}]


  });


