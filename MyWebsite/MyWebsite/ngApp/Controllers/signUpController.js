var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SignUpController = (function () {
            function SignUpController($uibModal, $uibModalInstance) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
            }
            SignUpController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return SignUpController;
        })();
        Controllers.SignUpController = SignUpController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
