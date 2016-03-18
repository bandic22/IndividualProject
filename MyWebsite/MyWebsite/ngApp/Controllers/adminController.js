var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AdminController = (function () {
            function AdminController($location, adminService) {
                var _this = this;
                this.$location = $location;
                this.adminService = adminService;
                this.sortType = 'memberSince';
                this.sortReverse = false;
                this.currentPage = 1;
                this.maxSize = 5;
                this.itemsPerPage = 5;
                debugger; //fix this resolve
                this.adminService.getAdminResource().then(function (result) {
                    _this.totalItems = result.users.length;
                    _this.adminResource = result;
                });
            }
            AdminController.prototype.getUserProfile = function (displayName) {
                this.$location.path('/profile/' + displayName);
            };
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=adminController.js.map