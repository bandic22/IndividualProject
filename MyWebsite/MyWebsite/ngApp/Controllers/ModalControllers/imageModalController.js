var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ImageModalController = (function () {
            function ImageModalController($uibModalInstance, userService, image, $route, isAuthorized) {
                this.$uibModalInstance = $uibModalInstance;
                this.userService = userService;
                this.image = image;
                this.$route = $route;
                this.isAuthorized = isAuthorized;
            }
            ImageModalController.prototype.addCaption = function () {
                var _this = this;
                return this.userService.addImage(this.image).then(function () {
                    _this.closeModal();
                });
            };
            ImageModalController.prototype.deleteImage = function () {
                var _this = this;
                return this.userService.deleteImage(this.image.id).then(function () {
                    _this.closeModal();
                });
            };
            ImageModalController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
                this.$route.reload();
            };
            return ImageModalController;
        })();
        Controllers.ImageModalController = ImageModalController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=imageModalController.js.map