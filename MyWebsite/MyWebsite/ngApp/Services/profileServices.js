var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.userResource = $resource("/api/users/:id");
            }
            UserService.prototype.getUserDetails = function (id) {
                return this.userResource.get({ id: id });
            };
            return UserService;
        })();
        Services.UserService = UserService;
        angular.module("MyApp").service("userService", UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
