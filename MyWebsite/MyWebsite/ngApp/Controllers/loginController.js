var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($location, $uibModal) {
                this.$location = $location;
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.login = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/loginDialog.html",
                    controller: "dialogController",
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
