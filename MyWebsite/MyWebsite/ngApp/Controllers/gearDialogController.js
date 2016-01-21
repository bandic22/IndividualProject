var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var GearDialogController = (function () {
            function GearDialogController($uibModal, $uibModalInstance) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
            }
            GearDialogController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return GearDialogController;
        })();
        Controllers.GearDialogController = GearDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
