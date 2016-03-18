var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditGearController = (function () {
            function EditGearController(userService, filepickerService, $location, $scope, $stateParams) {
                this.userService = userService;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$scope = $scope;
                this.$stateParams = $stateParams;
                this.gearItem = this.userService.getUserGear($stateParams['id']);
            }
            EditGearController.prototype.editGear = function () {
                var _this = this;
                this.userService.addUserGear(this.gearItem).then(function () {
                    _this.$location.path("/profile/myprofile");
                });
            };
            EditGearController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'audio/*' }, this.fileUploaded.bind(this));
            };
            EditGearController.prototype.fileUploaded = function (file) {
                // save file url to database            
                this.file = file;
                this.gearItem.fileUrl = this.file.url;
                console.log(this.gearItem);
                this.$scope.$apply(); // force page to update            
            };
            EditGearController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return EditGearController;
        })();
        Controllers.EditGearController = EditGearController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=editGearController.js.map