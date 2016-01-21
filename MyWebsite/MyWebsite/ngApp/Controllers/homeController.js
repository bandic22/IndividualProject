var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal) {
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.signUp = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/signUpDialog.html",
                    controller: MyApp.Controllers.SignUpController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            HomeController.prototype.login = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/loginDialog.html",
                    controller: MyApp.Controllers.LoginDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module("MyApp").controller("homeController", HomeController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
