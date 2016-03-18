var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var GearDialogController = (function () {
            function GearDialogController($location, userService) {
                this.$location = $location;
                this.userService = userService;
            }
            GearDialogController.prototype.addGear = function () {
                var _this = this;
                return this.userService.addUserGear(this.gearItem).then(function () {
                    _this.$location.path("/profile/myprofile");
                });
            };
            GearDialogController.prototype.editGear = function () {
            };
            GearDialogController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return GearDialogController;
        })();
        Controllers.GearDialogController = GearDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=gearDialogController.js.map