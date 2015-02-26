'use strict';


angular
    .module('app')
    .config(appConfig);

function appConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'features/home/homeView.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
};