'use strict';



angular.module('motoApp')
  .controller('SellCtrl', function ($scope, Sell, Authenticator, makeAndModel) {
        $scope.makesAndModels = makeAndModel.makesAndModels;
//    $scope.postedAdd = post
        $scope.listing = {};
        $scope.newUser = {};
        $scope.userToLogin = {};
        $scope.loggedIn = false;

        $scope.user = {};

        $scope.submit = function () {
            Sell.postAdd($scope.listing);
        };

        $scope.login = function() {
          Authenticator.logInUser($scope.userToLogin);
        };

        $scope.createUser = function() {
            Authenticator.createUser($scope.newUser)
        };

  });
