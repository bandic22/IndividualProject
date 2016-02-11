var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SpaceDialogController = (function () {
            function SpaceDialogController($location, filepickerService, $scope, userService) {
                this.$location = $location;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.userService = userService;
            }
            SpaceDialogController.prototype.addNewSpace = function () {
                var _this = this;
                this.userService.editUserSpace(this.userSpace).then(function () {
                    _this.$location.path("/profile/myprofile");
                });
            };
            SpaceDialogController.prototype.editSpace = function () {
            };
            SpaceDialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this), this.$location.path("/profile"));
            };
            SpaceDialogController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.userSpace.fileUrl = this.file.url; // or this.file.url
                this.$scope.$apply(); // force page to update
            };
            SpaceDialogController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return SpaceDialogController;
        })();
        Controllers.SpaceDialogController = SpaceDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
