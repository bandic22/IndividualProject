// Creates the module and sets up page routing and HTML5 mode
namespace MyApp {
    angular.module("MyApp", ["ngRoute", "angular-filepicker", "ui.bootstrap"]).config((filepickerProvider, $routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        filepickerProvider.setKey("AupjI1ulQZebn5FDtAfgkz");
        $routeProvider
            .when("/", {
                templateUrl: "/ngApp/Views/home.html",
                controller: MyApp.Controllers.SignUpController,
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
            .when('/profileDetails/:id', {
                templateUrl: '/ngApp/profileDetails.html',
                controller: MyApp.Controllers.ProfileDetailsController,
                controllerAs: 'vm'
            })
            .otherwise("/");

        $locationProvider.html5Mode(true);
    });

}