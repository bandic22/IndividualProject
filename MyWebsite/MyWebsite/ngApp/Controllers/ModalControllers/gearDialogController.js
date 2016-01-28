var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var GearDialogController = (function () {
            function GearDialogController($uibModal, $uibModalInstance, userService) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.userService = userService;
            }
            GearDialogController.prototype.addGear = function () {
                var _this = this;
                return this.userService.addUserGear(this.gearItem).then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            GearDialogController.prototype.editGear = function () {
            };
            GearDialogController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return GearDialogController;
        })();
        Controllers.GearDialogController = GearDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=gearDialogController.js.map