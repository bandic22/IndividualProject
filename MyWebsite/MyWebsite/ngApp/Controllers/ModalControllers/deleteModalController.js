var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DeleteController = (function () {
            function DeleteController($uibModalInstance, item, type, userService, $route, exploreService) {
                this.$uibModalInstance = $uibModalInstance;
                this.item = item;
                this.type = type;
                this.userService = userService;
                this.$route = $route;
                this.exploreService = exploreService;
            }
            DeleteController.prototype.checkDelete = function () {
                var _this = this;
                switch (this.type) {
                    case "request":
                        return this.userService.deleteRequest(this.item).then(function () {
                            return _this.closeModal();
                        });
                        break;
                    case "gear":
                        return this.userService.deleteUserGear(this.item).then(function () {
                            return _this.closeModal();
                        });
                        break;
                    case "image":
                        return this.userService.deleteImage(this.item).then(function () {
                            return _this.closeModal();
                        });
                        break;
                    case "reply":
                        return this.exploreService.deleteReply(this.item).then(function () {
                            return _this.closeModal();
                        });
                        break;
                }
            };
            DeleteController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
                this.$route.reload();
            };
            return DeleteController;
        })();
        Controllers.DeleteController = DeleteController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=deleteModalController.js.map