'use strict';

angular.module('motoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.searchresults = [{title: "the best add ever", make: "honda", model: "shadow", year: 2001, mileage: 20000, mainimage: "images/yeoman.png"},
            {title: "Super awesome honda shadow", make: "honda", model: "shadow", year: 2001, mileage: 20000, mainimage: "images/yeoman.png"},
            {title: "R6", make: "honda", model: "shadow", year: 2001, mileage: 20000, mainimage: "images/yeoman.png"},
            {title: "Awesome Suzuki", make: "honda", model: "shadow", year: 2001, mileage: 20000, mainimage: "images/yeoman.png"}];

  });
