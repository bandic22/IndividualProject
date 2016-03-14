var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, $uibModal, accountService, profileService) {
                this.$scope = $scope;
                this.$uibModal = $uibModal;
                this.accountService = accountService;
                this.profileService = profileService;
                this.isLoggedIn = accountService.isLoggedIn();
            }
            HomeController.prototype.signUp = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/signUpDialog.html",
                    controller: MyApp.Controllers.RegisterController,
                    controllerAs: "register",
                    size: "md"
                });
            };
            HomeController.prototype.login = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/loginDialog.html",
                    controller: MyApp.Controllers.LoginController,
                    controllerAs: "login",
                    size: "sm"
                });
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module("MyApp").controller("HomeController", HomeController); //why could I declare multiple controllers on the index page only when "HomeController" had a captial H
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
