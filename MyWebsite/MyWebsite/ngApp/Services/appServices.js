var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService() {
            }
            UserService.prototype.getUser = function () {
                this.newUser = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    dateOfBirth: this.dateOfBirth,
                    userName: this.userName,
                    emailAddress: this.emailAddress,
                    password: this.password
                };
            };
            return UserService;
        })();
        Services.UserService = UserService;
        angular.module("MyApp").service('userService', UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appServices.js.map