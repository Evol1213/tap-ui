'use strict';
angular.module('myApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ct.ui.router.extras',
    'ui.bootstrap',
    'app.components',
    'app.utils',
    'app.web'
])
    .config(function ($provide, $stateProvider, $urlRouterProvider, $locationProvider, $tooltipProvider, $httpProvider, appConfig) {
        $stateProvider
            .state('gameHall', {
                url: '/confirmRedirect?type&token',
                templateUrl: 'partials/confirmRedirect.html',
                controller: 'ConfirmRedirectCtrl'
            });

        $urlRouterProvider.otherwise(function () {
            return '/login';
        });

        // Initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        // 禁用缓存
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        $locationProvider.html5Mode(appConfig.html5Mode);
        $tooltipProvider.setTriggers({'customEvent': 'closeEvent'});

    });