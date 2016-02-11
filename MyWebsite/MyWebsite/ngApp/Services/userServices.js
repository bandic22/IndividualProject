var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        // Performs gets userProfileInfo from the userViewModel and get's the WebAPI controllers so they can be refered to as somethingResource here, and here we call on those methods in the WebAPI controller through 'save' instead of post etc... We get each resource separately here because the resources (DB tables) are connected to each other by foreign keys. Therefore in order to perform crud on each table I need to get them seperately here.
        var UserService = (function () {
            function UserService($resource) {
                this.requestResource = $resource("/api/requests/:id"); //api/nameOfServerSideController - Controller/:id
                this.userGearResource = $resource("/api/userGear/:id");
                this.userSpaceResource = $resource("/api/userSpace/:id");
                this.userInfoResource = $resource("/api/profileView/:id");
            }
            // get user info from profile view model
            UserService.prototype.getUserInfo = function () {
                return this.userInfoResource.get();
            };
            UserService.prototype.getUserRequest = function (id) {
                return this.requestResource.get({ id: id });
            };
            UserService.prototype.getUserGear = function (id) {
                return this.userGearResource.get({ id: id });
            };
            UserService.prototype.getUserSpace = function (id) {
                return this.userSpaceResource.get({ id: id });
            };
            UserService.prototype.addUserRequest = function (request) {
                return this.requestResource.save(request).$promise;
            };
            UserService.prototype.deleteRequest = function (id) {
                return this.requestResource.remove({ id: id }).$promise;
            };
            UserService.prototype.addUserGear = function (gearItem) {
                return this.userGearResource.save(gearItem).$promise;
            };
            UserService.prototype.deleteUserGear = function (id) {
                return this.userGearResource.remove({ id: id }).$promise;
            };
            UserService.prototype.editUserSpace = function (userSpace) {
                return this.userSpaceResource.save(userSpace).$promise;
            };
            UserService.prototype.editUserGear = function (gearItem) {
                return this.userGearResource.save(gearItem).$promise;
            };
            UserService.prototype.editUserRequest = function (request) {
                return this.requestResource.save(request).$promise;
            };
            return UserService;
        })();
        Services.UserService = UserService;
        angular.module("MyApp").service("userService", UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
