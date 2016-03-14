var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var GearDetailsController = (function () {
            function GearDetailsController(userService, $stateParams) {
                this.userService = userService;
                this.gearItem = this.userService.getUserGear($stateParams['id']);
            }
            return GearDetailsController;
        })();
        Controllers.GearDetailsController = GearDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
