var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditProfileModalController = (function () {
            function EditProfileModalController(userService, $uibModal, $uibModalInstance) {
                this.userService = userService;
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
//# sourceMappingURL=editProfileModalController.js.map