var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditRequestController = (function () {
            function EditRequestController(userService, $stateParams, filepickerService, $location, $scope, categoryService) {
                var _this = this;
                this.userService = userService;
                this.$stateParams = $stateParams;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$scope = $scope;
                this.categoryService = categoryService;
                this.categoryService.getRequestCategories().then(function (result) {
                    _this.categories = result;
                    _this.userService.getUserRequest($stateParams['id']).then(function (result) {
                        _this.request = result;
                        _this.checkCategories();
                    });
                });
            }
            EditRequestController.prototype.addRequest = function () {
                var _this = this;
                var requestVm = {
                    request: this.request,
                    catRequests: []
                };
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
                this.userService.addUserRequest(requestVm).then(function () {
                    _this.$location.path("/profile/myprofile");
                });
            };
            EditRequestController.prototype.checkCategories = function () {
                debugger;
                for (var _i = 0, _a = this.request.categories; _i < _a.length; _i++) {
                    var category = _a[_i];
                    if (category.id == 1) {
                        $("#recording").prop('checked', true);
                    }
                    if (category.id == 2) {
                        $("#mixing").prop('checked', true);
                    }
                    if (category.id == 3) {
                        $("#mastering").prop('checked', true);
                    }
                    if (category.id == 4) {
                        $("#composition").prop('checked', true);
                    }
                }
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