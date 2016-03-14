var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditProfileModalController = (function () {
            function EditProfileModalController(userService, $location) {
                this.userService = userService;
                this.$location = $location;
            }
            EditProfileModalController.prototype.cancel = function () {
                this.$location.path("/profile");
            };
            return EditProfileModalController;
        })();
        Controllers.EditProfileModalController = EditProfileModalController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=editProfileModalController.js.map