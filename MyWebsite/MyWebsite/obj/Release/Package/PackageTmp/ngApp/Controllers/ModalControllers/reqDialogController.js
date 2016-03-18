var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ReqDialogController = (function () {
            function ReqDialogController(userService, filepickerService, $location, $scope, categoryService) {
                var _this = this;
                this.userService = userService;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$scope = $scope;
                this.categoryService = categoryService;
                this.categoryService.getRequestCategories().then(function (result) {
                    _this.categories = result;
                });
            }
            ReqDialogController.prototype.addRequest = function () {
                var _this = this;
                var requestVm = {
                    request: this.request,
                    catRequests: []
                };
                debugger;
                if ($("#recording").is(':checked')) {
                    var recording = {
                        requestId: this.request.id,
                        categoryId: this.categories[0].id
                    };
                    requestVm.catRequests.push(recording);
                }
                if ($("#mixing").is(':checked')) {
                    var mixing = {
                        requestId: this.request.id,
                        categoryId: this.categories[1].id
                    };
                    requestVm.catRequests.push(mixing);
                }
                if ($("#mastering").is(':checked')) {
                    var mastering = {
                        requestId: this.request.id,
                        categoryId: this.categories[2].id
                    };
                    requestVm.catRequests.push(mastering);
                }
                if ($("#composition").is(':checked')) {
                    var composition = {
                        requestId: this.request.id,
                        categoryId: this.categories[3].id
                    };
                    requestVm.catRequests.push(composition);
                }
                return this.userService.addUserRequest(requestVm).then(function () {
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
                // force page to update            
            };
            ReqDialogController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return ReqDialogController;
        })();
        Controllers.ReqDialogController = ReqDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=reqDialogController.js.map