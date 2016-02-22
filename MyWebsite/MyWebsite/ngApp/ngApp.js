// Creates the module and sets up page routing and HTML5 mode
var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "angular-filepicker", "ui.bootstrap", "ngResource", "ngSanitize"]).config(function (filepickerProvider, $routeProvider, $locationProvider, $sceProvider) {
        filepickerProvider.setKey("AupjI1ulQZebn5FDtAfgkz");
        $routeProvider
            .when("/", {
            templateUrl: "/ngApp/Views/home.html",
            controller: MyApp.Controllers.HomeController,
            controllerAs: "vm"
        })
            .when("/profile/:displayName?", {
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
            .when("/spaceDetails/:id", {
            templateUrl: "/ngApp/Views/spaceDetails.html",
            controller: MyApp.Controllers.SpaceDetailsController,
            controllerAs: "vm"
        })
            .when("/gearDetails/:id", {
            templateUrl: "/ngApp/Views/gearDetails.html",
            controller: MyApp.Controllers.GearDetailsController,
            controllerAs: "vm"
        })
            .when("/details/:id", {
            templateUrl: "/ngApp/Views/requestDetails.html",
            controller: MyApp.Controllers.RequestDetailsController,
            controllerAs: "vm"
        })
            .when("/addRequest", {
            templateUrl: "/ngApp/Dialogs/newReqDialog.html",
            controller: MyApp.Controllers.ReqDialogController,
            controllerAs: "vm",
        })
            .when("/addGear", {
            templateUrl: "/ngApp/Dialogs/newGearDialog.html",
            controller: MyApp.Controllers.GearDialogController,
            controllerAs: "vm",
        })
            .when("/addSpace", {
            templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
            controller: MyApp.Controllers.SpaceDialogController,
            controllerAs: "vm"
        })
            .when("/editRequest/:id", {
            templateUrl: "/ngApp/Dialogs/editReqDialog.html",
            controller: MyApp.Controllers.EditRequestController,
            controllerAs: "vm",
        })
            .when("/editSpace/:id", {
            templateUrl: "/ngApp/Dialogs/editSpaceDialog.html",
            controller: MyApp.Controllers.EditSpaceController,
            controllerAs: "vm",
        })
            .when("/editGear/:id", {
            templateUrl: "/ngApp/Dialogs/editGearDialog.html",
            controller: MyApp.Controllers.EditGearController,
            controllerAs: "vm",
        })
            .when("/adminPage", {
            templateUrl: "/ngApp/Views/adminPage.html",
            controller: MyApp.Controllers.AdminController,
            controllerAs: "admin",
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
//# sourceMappingURL=ngApp.js.map