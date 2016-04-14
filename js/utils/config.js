angular.module('app.utils.configs', [])

/**
 * @ngdoc object
 * @name xd.utils.configs.constant:appConfig
 * @description
 * 定义APP全局设置
 */
    .constant('appConfig', {
        /**
         * @ngdoc property
         * @name serverAddress
         * @propertyOf xd.utils.configs.constant:appConfig
         * @description
         * 服务端地址
         */
        //http://s.xd.com/
        serverAddress: '/api/',
        //serverAddress : 'http://s.xd.com/',

        /**
         * @ngdoc property
         * @name html5Mode
         * @propertyOf xd.utils.configs.constant:appConfig
         * @description
         * 设置是否使用html5 historyApi模式,默认`true`;
         */
        html5Mode: true,
        /**
         * @ngdoc property
         * @name requestTimeout
         * @propertyOf xd.utils.configs.constant:appConfig
         * @description
         * 设置request调用的超时时间,单位ms
         */
        requestTimeout: 15 * 1000
    });