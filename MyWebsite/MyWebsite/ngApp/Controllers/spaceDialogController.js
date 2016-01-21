var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SpaceDialogController = (function () {
            function SpaceDialogController($uibModal, $uibModalInstance, filepickerService, $scope) {
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            SpaceDialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: '/image' }, this.fileUploaded.bind(this), this.$uibModalInstance.close());
            };
            SpaceDialogController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.file = file;
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
