// Creates the module and sets up page routing and HTML5 mode
var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "ngResource", "ui.bootstrap", "ui.router", "angular-filepicker", "ngSanitize"]).config(function ($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider, $sceProvider, filepickerProvider) {
        filepickerProvider.setKey("AupjI1ulQZebn5FDtAfgkz");
        $stateProvider
            .state("home", {
            url: "/",
            templateUrl: "/ngApp/Views/home.html",
            controller: MyApp.Controllers.HomeController,
            controllerAs: "vm"
        })
            .state("profile", {
            url: "/profile/:displayName?",
            templateUrl: "/ngApp/Views/profile.html",
            controller: MyApp.Controllers.ProfileController,
            controllerAs: "vm"
        })
            .state("myProfile", {
            url: "/profile/myprofile",
            templateUrl: "/ngApp/Views/profile.html",
            controller: MyApp.Controllers.ProfileController,
            controllerAs: "vm"
        })
            .state("explore", {
            url: "/explore",
            templateUrl: "/ngApp/Views/explore.html",
            controller: MyApp.Controllers.ExploreController,
            controllerAs: 'vm'
        })
            .state("about", {
            url: "/about",
            templateUrl: "/ngApp/Views/about.html",
            controller: MyApp.Controllers.AboutController,
            controllerAs: "vm"
        })
            .state("spaceDetails", {
            url: "/spaceDetails/:id",
            templateUrl: "/ngApp/Views/spaceDetails.html",
            controller: MyApp.Controllers.SpaceDetailsController,
            controllerAs: "vm"
        })
            .state("gearDetails", {
            url: "/gearDetails/:id",
            templateUrl: "/ngApp/Views/gearDetails.html",
            controller: MyApp.Controllers.GearDetailsController,
            controllerAs: "vm"
        })
            .state("requestDetails", {
            url: "/details/:id",
            templateUrl: "/ngApp/Views/requestDetails.html",
            controller: MyApp.Controllers.RequestDetailsController,
            controllerAs: "vm"
        })
            .state("addRequest", {
            url: "/addRequest",
            templateUrl: "/ngApp/Dialogs/newReqDialog.html",
            controller: MyApp.Controllers.ReqDialogController,
            controllerAs: "vm",
        })
            .state("addGear", {
            url: "/addGear",
            templateUrl: "/ngApp/Dialogs/newGearDialog.html",
            controller: MyApp.Controllers.GearDialogController,
            controllerAs: "vm",
        })
            .state("addSpace", {
            url: "/addSpace",
            templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
            controller: MyApp.Controllers.SpaceDialogController,
            controllerAs: "vm"
        })
            .state("editRequest", {
            url: "/editRequest/:id",
            templateUrl: "/ngApp/Dialogs/editReqDialog.html",
            controller: MyApp.Controllers.EditRequestController,
            controllerAs: "vm",
        })
            .state("editSpace", {
            url: "/editSpace/:id",
            templateUrl: "/ngApp/Dialogs/editSpaceDialog.html",
            controller: MyApp.Controllers.EditSpaceController,
            controllerAs: "vm",
        })
            .state("editGear", {
            url: "/editGear/:id",
            templateUrl: "/ngApp/Dialogs/editGearDialog.html",
            controller: MyApp.Controllers.EditGearController,
            controllerAs: "vm",
        })
            .state("adminPage", {
            url: "/adminPage",
            templateUrl: "/ngApp/Views/adminPage.html",
            controller: MyApp.Controllers.AdminController,
            controllerAs: "admin",
        })
            .state("news", {
            url: "/news",
            templateUrl: "/ngApp/Views/news.html",
            controller: MyApp.Controllers.NewsController,
            controllerAs: "vm"
        });
        $urlRouterProvider.otherwise('/');
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
