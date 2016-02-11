var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AdminController = (function () {
            function AdminController($location, adminService, profileService) {
                this.$location = $location;
                this.adminService = adminService;
                this.profileService = profileService;
                this.adminResource = adminService.getAdminResource();
            }
            AdminController.prototype.getUserProfile = function (displayName) {
                //this.profileService.getUserInfoProfile(displayName);
                //debugger;
                this.$location.path('/profile/' + displayName);
            };
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
