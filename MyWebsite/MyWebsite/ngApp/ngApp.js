// Creates the module and sets up page routing and HTML5 mode
var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "angular-filepicker", "ui.bootstrap", "ngResource"]).config(function (filepickerProvider, $routeProvider, $locationProvider) {
        filepickerProvider.setKey("AupjI1ulQZebn5FDtAfgkz");
        $routeProvider
            .when("/", {
            templateUrl: "/ngApp/Views/home.html",
            controller: MyApp.Controllers.HomeController,
            controllerAs: "vm"
        })
            .when("/profile", {
            templateUrl: "/ngApp/Views/profile.html",
            controller: MyApp.Controllers.ProfileController,
            controllerAs: "vm"
        })
            .when("/explore", {
            templateUrl: "/ngApp/Views/explore.html",
            controller: MyApp.Controllers.ExploreController,
            controllerAs: 'vm'
        })
            .when("/about", {
            templateUrl: "/ngApp/Views/about.html",
            controller: MyApp.Controllers.AboutController,
            controllerAs: "vm"
        })
            .when("/details/:id", {
            templateUrl: "/ngApp/Views/requestDetails.html",
            controller: MyApp.Controllers.RequestDetailsController,
            controllerAs: "vm"
        })
            .otherwise("/");
        $locationProvider.html5Mode(true);
    });
    angular.module('MyApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        });
    });
    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})(MyApp || (MyApp = {}));
