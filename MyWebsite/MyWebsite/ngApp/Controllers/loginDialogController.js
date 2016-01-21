var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var LoginDialogController = (function () {
            function LoginDialogController($location, $uibModal, $uibModalInstance) {
                this.$location = $location;
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
            }
            LoginDialogController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return LoginDialogController;
        })();
        Controllers.LoginDialogController = LoginDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
