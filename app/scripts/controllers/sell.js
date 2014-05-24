'use strict';
var makesAndModels = {
    'BMW': [
        'black', 'red', 'green'
    ],
    'Honda': [
        'Shadow', 'CBR 250', 'CBR 600'
    ],
    'Kawasaki': [
        'Ninja 250', 'Ninja 500', 'Ninja 600'
    ],
    'Ducati': [
        'Monster', 'Street Fighter'
    ],
    'Harley Davidson': [
        'touring' ,'softail' , 'Dyna','Sportster','VRSC','Street'
    ],
    'KTM': [
        '200 Duke', '390 Duke', '690 Duke', '990 Super Duke R', '1290 Super Duke R'
    ],
    'Suzuki': [
        'Hayabusa', 'Katana'
    ],
    'Yamaha': [
        'R6', 'R1'
    ]
};

var sellerName,
    sellerPhone,
    sellerEmail,
    bikeMake,
    bikeModel,
    bikeMileage,
    bikeYear,
    bikePrice,
    bikeTitle,
    bikeDescription;


angular.module('motoApp')
  .controller('SellCtrl', function ($scope, Sell) {

//    $scope.postedAdd = post
        $scope.makesAndModels = makesAndModels;

        $scope.name = sellerName;
        $scope.phone = sellerPhone;
        $scope.email = sellerEmail;
        $scope.selectedMake = bikeMake;
        $scope.selectedModel = bikeModel;
        $scope.year = bikeYear;
        $scope.mileage = bikeMileage;
        $scope.price = bikePrice;
        $scope.title = bikeTitle;
        $scope.description = bikeDescription;

        $scope.submit = Sell.postAdd;



  });
