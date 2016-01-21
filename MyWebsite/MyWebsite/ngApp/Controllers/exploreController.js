var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ExploreController = (function () {
            function ExploreController() {
            }
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
        angular.module("MyApp").controller("exploreController", ExploreController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
