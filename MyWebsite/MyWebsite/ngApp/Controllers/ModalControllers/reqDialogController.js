var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ReqDialogController = (function () {
            function ReqDialogController(userService, $uibModalInstance, filepickerService, $scope) {
                this.userService = userService;
                this.$uibModalInstance = $uibModalInstance;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            ReqDialogController.prototype.addRequest = function () {
                var _this = this;
                this.userService.addUserRequest(this.request).then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            ReqDialogController.prototype.editRequest = function () {
            };
            ReqDialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'audio/*' }, this.fileUploaded.bind(this), this.$uibModalInstance.close());
            };
            ReqDialogController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.request.fileUrl = file;
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
