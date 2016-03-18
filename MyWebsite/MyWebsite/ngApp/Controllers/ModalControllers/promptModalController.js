var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var PromptController = (function () {
            function PromptController($uibModalInstance, userService, exploreService, adminService) {
                this.$uibModalInstance = $uibModalInstance;
                this.userService = userService;
                this.exploreService = exploreService;
                this.adminService = adminService;
            }
            PromptController.prototype.deleteConfirm = function (input, id) {
                switch (input) {
                    case "Reply":
                        break;
                    case "GearItem":
                        break;
                    case "Request":
                        break;
                    case "Image":
                        break;
                }
            };
            PromptController.prototype.confirmTOS = function () {
            };
            return PromptController;
        })();
        Controllers.PromptController = PromptController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=promptModalController.js.map