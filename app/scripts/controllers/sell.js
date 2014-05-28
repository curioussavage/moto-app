'use strict';



angular.module('motoApp')
  .controller('SellCtrl', function ($scope, Sell, makeAndModel) {
        $scope.makesAndModels = makeAndModel.makesAndModels;
//    $scope.postedAdd = post
        $scope.listing = {};


        $scope.submit = function () {
            Sell.postAdd($scope.listing);
        }
  });
