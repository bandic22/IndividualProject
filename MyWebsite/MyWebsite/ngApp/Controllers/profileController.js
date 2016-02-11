var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController(profileService, userService, $routeParams, $route) {
                this.profileService = profileService;
                this.userService = userService;
                this.$routeParams = $routeParams;
                this.$route = $route;
                this.checkRouteParam();
            }
            ProfileController.prototype.checkRouteParam = function () {
                if (this.$routeParams["displayName"] == "myprofile") {
                    this.userProfileInfo = this.getLoggedInUser();
                }
                else {
                    this.userProfileInfo = this.profileService.getUserInfoProfile(this.$routeParams["displayName"]);
                }
            };
            ProfileController.prototype.getLoggedInUser = function () {
                return this.profileService.getUserInfo();
            };
            ProfileController.prototype.editRequest = function (id) {
                return this.userService.getUserRequest(id);
            };
            ProfileController.prototype.editGear = function (id) {
                return this.userService.getUserGear(id);
            };
            ProfileController.prototype.editSpace = function (id) {
                return this.userService.getUserSpace(id);
            };
            ProfileController.prototype.deleteGear = function (id) {
                var _this = this;
                return this.userService.deleteUserGear(id).then(function () {
                    return _this.$route.reload();
                });
            };
            ProfileController.prototype.deleteRequest = function (id) {
                var _this = this;
                return this.userService.deleteRequest(id).then(function () {
                    return _this.$route.reload();
                });
            };
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
