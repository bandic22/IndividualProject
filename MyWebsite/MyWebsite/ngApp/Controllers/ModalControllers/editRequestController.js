var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditRequestController = (function () {
            function EditRequestController(userService, $routeParams, filepickerService, $location, $scope) {
                this.userService = userService;
                this.$routeParams = $routeParams;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$scope = $scope;
                this.request = this.userService.getUserRequest($routeParams['id']);
            }
            EditRequestController.prototype.addRequest = function () {
                var _this = this;
                this.userService.addUserRequest(this.request).then(function () {
                    _this.$location.path("/profile/myprofile");
                });
            };
            EditRequestController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'audio/*' }, this.fileUploaded.bind(this));
            };
            EditRequestController.prototype.fileUploaded = function (file) {
                // save file url to database            
                this.file = file;
                this.request.fileUrl = this.file.url;
                console.log(this.request);
                this.$scope.$apply(); // force page to update            
            };
            EditRequestController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return EditRequestController;
        })();
        Controllers.EditRequestController = EditRequestController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=editRequestController.js.map