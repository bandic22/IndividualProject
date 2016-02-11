var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditSpaceController = (function () {
            function EditSpaceController(userService, filepickerService, $location, $scope, $routeParams) {
                this.userService = userService;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$scope = $scope;
                this.userSpace = this.userService.getUserSpace($routeParams['id']);
            }
            EditSpaceController.prototype.editSpace = function () {
                var _this = this;
                this.userService.editUserSpace(this.userSpace).then(function () {
                    _this.$location.path("/profile/myprofile");
                });
            };
            EditSpaceController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            EditSpaceController.prototype.fileUploaded = function (file) {
                // save file url to database            
                this.file = file;
                this.userSpace.fileUrl = this.file.url;
                console.log(this.userSpace);
                this.$scope.$apply(); // force page to update            
            };
            EditSpaceController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return EditSpaceController;
        })();
        Controllers.EditSpaceController = EditSpaceController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
