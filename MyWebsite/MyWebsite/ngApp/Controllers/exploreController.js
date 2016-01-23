var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ExploreController = (function () {
            function ExploreController(mainService, $resource, $location) {
                this.mainService = mainService;
                this.$resource = $resource;
                this.$location = $location;
                this.requests = mainService.getRequests();
            }
            ExploreController.prototype.getRequest = function (id) {
                this.request = this.mainService.getRequest(id);
            };
            ExploreController.prototype.addRequest = function () {
                return this.mainService.addRequest(this.request);
            };
            ExploreController.prototype.deleteRequest = function (id) {
                return this.mainService.deleteRequest(id); // add .then, change path
            };
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=exploreController.js.map