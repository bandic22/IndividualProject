var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditProfileModalController = (function () {
            function EditProfileModalController($uibModal, $uibModalInstance) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
            }
            EditProfileModalController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return EditProfileModalController;
        })();
        Controllers.EditProfileModalController = EditProfileModalController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
