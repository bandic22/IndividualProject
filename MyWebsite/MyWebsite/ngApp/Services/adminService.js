var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AdminService = (function () {
            function AdminService($resource) {
                this.adminResource = $resource("/api/adminView/");
            }
            AdminService.prototype.getAdminResource = function () {
                return this.adminResource.get().$promise;
            };
            return AdminService;
        })();
        Services.AdminService = AdminService;
        angular.module("MyApp").service("adminService", AdminService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=adminService.js.map