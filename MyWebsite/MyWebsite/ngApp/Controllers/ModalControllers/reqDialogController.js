var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ReqDialogController = (function () {
            function ReqDialogController(userService, filepickerService, $location, $scope) {
                this.userService = userService;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$scope = $scope;
            }
            ReqDialogController.prototype.addRequest = function () {
                var _this = this;
                this.userService.addUserRequest(this.request).then(function () {
                    _this.$location.path("/profile/myprofile");
                    window.location.reload();
                });
            };
            ReqDialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'audio/*' }, this.fileUploaded.bind(this));
            };
            ReqDialogController.prototype.fileUploaded = function (file) {
                // save file url to database            
                this.file = file;
                this.request.fileUrl = this.file.url;
                console.log(this.request);
                this.$scope.$apply(); // force page to update            
            };
            ReqDialogController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return ReqDialogController;
        })();
        Controllers.ReqDialogController = ReqDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
