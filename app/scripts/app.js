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
            url: '/search/',
            templateUrl: 'views/Sell.html',
            controller: 'TeamCtrl'
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
//        }
        })
        .state('Blog', {
            url: '/search/',
            templateUrl: 'views/blog.html',
            controller: 'TeamCtrl'
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
//        }
        });

});
