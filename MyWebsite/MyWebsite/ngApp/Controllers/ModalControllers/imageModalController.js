var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ImageModalController = (function () {
            function ImageModalController($uibModalInstance, userService, image, $state, isAuthorized) {
                this.$uibModalInstance = $uibModalInstance;
                this.userService = userService;
                this.image = image;
                this.$state = $state;
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
            };
            return ImageModalController;
        })();
        Controllers.ImageModalController = ImageModalController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
