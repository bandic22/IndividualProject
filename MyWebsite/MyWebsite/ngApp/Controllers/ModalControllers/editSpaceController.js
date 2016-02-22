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
                    _this.$scope.$apply();
                });
            };
            EditSpaceController.prototype.cancel = function () {
                this.$location.path("/profile/myprofile");
            };
            return EditSpaceController;
        })();
        Controllers.EditSpaceController = EditSpaceController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=editSpaceController.js.map