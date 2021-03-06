var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ReqDialogController = (function () {
            function ReqDialogController(requestService, $uibModalInstance, filepickerService, $scope) {
                this.requestService = requestService;
                this.$uibModalInstance = $uibModalInstance;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            ReqDialogController.prototype.addRequest = function () {
                this.$uibModalInstance.close();
                return this.requestService.addRequest(this.request);
            };
            ReqDialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: '/image' }, this.fileUploaded.bind(this), this.$uibModalInstance.close());
            };
            ReqDialogController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.file = file;
                this.$scope.$apply(); // force page to update
            };
            ReqDialogController.prototype.cancel = function () {
                this.$uibModalInstance.close();
            };
            return ReqDialogController;
        })();
        Controllers.ReqDialogController = ReqDialogController;
        angular.module("MyApp").controller("reqDialogController", ReqDialogController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
