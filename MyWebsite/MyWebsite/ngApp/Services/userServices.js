var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.requestResource = $resource("/api/requests/:id"); //api/nameOfServerSideController - Controller/:id
                this.userGearResource = $resource("/api/userGear/:id");
                this.userSpaceResource = $resource("/api/userSpace/:id");
            }
            // User Requests
            UserService.prototype.getUserRequests = function () {
                return this.requestResource.query();
            };
            UserService.prototype.getUserRequest = function (id) {
                return this.requestResource.get({ id: id });
            };
            UserService.prototype.addUserRequest = function (request) {
                return this.requestResource.save(request).$promise;
            };
            UserService.prototype.deleteRequest = function (id) {
                return this.requestResource.remove({ id: id }).$promise;
            };
            // User Gear
            UserService.prototype.getUserGears = function () {
                return this.userGearResource.query();
            };
            UserService.prototype.getUserGear = function (id) {
                return this.userGearResource.get({ id: id });
            };
            UserService.prototype.addUserGear = function (gearItem) {
                return this.userGearResource.save(gearItem).$promise;
            };
            UserService.prototype.deleteUserGear = function (id) {
                return this.userGearResource.remove({ id: id }).$promise;
            };
            // User Space
            UserService.prototype.getUserSpace = function (id) {
                return this.userSpaceResource.get({ id: id });
            };
            UserService.prototype.addUserSpace = function (userSpace) {
                return this.userSpaceResource.save(userSpace).$promise;
            };
            return UserService;
        })();
        Services.UserService = UserService;
        angular.module("MyApp").service("userService", UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=userServices.js.map