var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SpaceDialogController = (function () {
            function SpaceDialogController($uibModal, $uibModalInstance, filepickerService, $scope, userService) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.userService = userService;
                this.userSpace = {};
            }
            SpaceDialogController.prototype.addNewSpace = function () {
                var _this = this;
                return this.userService.addUserSpace(this.userSpace).then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            SpaceDialogController.prototype.editSpace = function () {
            };
            SpaceDialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this), this.$uibModalInstance.close());
            };
            SpaceDialogController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.userSpace.fileUrl = this.file.url; // or this.file.url
                this.$scope.$apply(); // force page to update
            };
            SpaceDialogController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return SpaceDialogController;
        })();
        Controllers.SpaceDialogController = SpaceDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
