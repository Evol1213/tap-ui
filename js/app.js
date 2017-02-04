'use strict';
angular.module('tap-ui', [])
    .config(function ($provide, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('gameHall', {
                url: '/confirmRedirect?type&token',
                templateUrl: 'partials/confirmRedirect.html',
                controller: 'ConfirmRedirectCtrl'
            });

        $urlRouterProvider.otherwise(function () {
            return '/login';
        });
    });