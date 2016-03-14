var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SpaceDetailsController = (function () {
            function SpaceDetailsController(userService, $stateParams) {
                this.userService = userService;
                this.userSpace = this.userService.getUserSpace($stateParams['id']);
            }
            return SpaceDetailsController;
        })();
        Controllers.SpaceDetailsController = SpaceDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
