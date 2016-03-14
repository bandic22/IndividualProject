var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DeleteController = (function () {
            function DeleteController($uibModalInstance, item, type, userService, $state, exploreService) {
                this.$uibModalInstance = $uibModalInstance;
                this.item = item;
                this.type = type;
                this.userService = userService;
                this.$state = $state;
                this.exploreService = exploreService;
            }
            DeleteController.prototype.checkDelete = function () {
                var _this = this;
                switch (this.type) {
                    case "request":
                        return this.userService.deleteRequest(this.item).then(function () {
                            return _this.closeModalReload();
                        });
                        break;
                    case "gear":
                        return this.userService.deleteUserGear(this.item).then(function () {
                            return _this.closeModalReload();
                        });
                        break;
                    case "image":
                        return this.userService.deleteImage(this.item).then(function () {
                            return _this.closeModalReload();
                        });
                        break;
                    case "reply":
                        return this.exploreService.deleteReply(this.item).then(function () {
                            return _this.closeModalReload();
                        });
                        break;
                }
            };
            DeleteController.prototype.closeModalReload = function () {
                this.$uibModalInstance.close();
                this.$state.reload();
            };
            DeleteController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
            };
            return DeleteController;
        })();
        Controllers.DeleteController = DeleteController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
