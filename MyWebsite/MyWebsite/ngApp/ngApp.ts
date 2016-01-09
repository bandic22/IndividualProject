namespace MyApp {
    angular.module("MyApp", ["ngRoute"]).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
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
            .otherwise("/");
        $locationProvider.html5Mode(true);
    });
}