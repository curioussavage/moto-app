'use strict';

angular.module('motoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.searchresults = [{id:1, title: "the best add ever", make: "yamaha", model: "r6", year: 2004, mileage: 20000, mainimage: "images/20140503_190358.jpg", price:500},
            {id:2, title: 'Super awesome honda', make: "honda", model: "r1", year: 2001, mileage: 50000, mainimage: "images/yeoman.png" , price:10000},
            {id:3, title: "R6", make: "honda", model: "shadow", year: 1998, mileage: 10000, mainimage: "images/yeoman.png", price:1000 },
            {id:4, title: "Awesome Suzuki", make: "kawasaki", model: "shadow", year: 1970, mileage: 20000, mainimage: "images/yeoman.png", price:4000}];




  });
