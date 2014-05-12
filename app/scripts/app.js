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
            controller: 'SearchCtrl',
            resolve: {
                adds: function (Search) {
                    return Search.getAdds();
                }
        }
        })
        .state('Sell', {
            url: '/sell/',
            templateUrl: 'views/Sell.html',
            controller: 'MainCtrl'

        })
        .state('Blog', {
            url: '/blog/',
            templateUrl: 'views/blog.html',
            controller: 'MainCtrl'

        })
        .state('listing', {
            url: '/search/:listingId',
            templateUrl: 'views/listing.html',
            controller: 'MainCtrl'

        })
//        .state('add', {
//            url: '/team/:teamId',
//            templateUrl: 'views/team.html',
//            controller: 'TeamCtrl'
//            resolve: {
//                team: function($stateParams, Turtle){
//                    return Turtle.getTeam($stateParams.teamId);
//                }
//            }
});
