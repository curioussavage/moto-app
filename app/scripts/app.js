'use strict';



var myapp = angular.module('motoApp', ['ui.router' ]);

    myapp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
        .state('Search', {
            url: '/search/',
            templateUrl: 'views/search.html',
            controller: 'MainCtrl'
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
//        }
        })
        .state('Sell', {
            url: '/sell/',
            templateUrl: 'views/Sell.html',
            controller: 'TeamCtrl'
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
//        }
        })
        .state('Blog', {
            url: '/blog/',
            templateUrl: 'views/blog.html',
            controller: 'TeamCtrl'
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
//        }
        })
        .state('listing', {
            url: '/search/:listingId',
            templateUrl: 'views/listing.html',
            controller: 'TeamCtrl'
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
//        }
        })
});
