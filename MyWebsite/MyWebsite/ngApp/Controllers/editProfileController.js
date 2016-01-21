var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditProfileController = (function () {
            function EditProfileController($uibModal, $uibModalInstance) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
            }
            EditProfileController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return EditProfileController;
        })();
        Controllers.EditProfileController = EditProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
