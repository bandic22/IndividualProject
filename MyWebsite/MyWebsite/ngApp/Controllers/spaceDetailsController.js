var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SpaceDetailsController = (function () {
            function SpaceDetailsController(userService, $routeParams) {
                this.userService = userService;
                this.userSpace = this.userService.getUserSpace($routeParams['id']);
            }
            return SpaceDetailsController;
        })();
        Controllers.SpaceDetailsController = SpaceDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=spaceDetailsController.js.map