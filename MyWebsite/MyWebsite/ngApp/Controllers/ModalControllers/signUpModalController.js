var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SignUpModalController = (function () {
            function SignUpModalController($uibModal, $uibModalInstance, accountService) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.accountService = accountService;
            }
            SignUpModalController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return SignUpModalController;
        })();
        Controllers.SignUpModalController = SignUpModalController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
