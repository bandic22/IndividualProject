var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ExploreController = (function () {
            function ExploreController(exploreService, $resource, $location) {
                this.exploreService = exploreService;
                this.$resource = $resource;
                this.$location = $location;
                this.requests = exploreService.getRequests();
            }
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=exploreController.js.map