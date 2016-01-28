var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProfileService = (function () {
            function ProfileService($resource) {
                this.userInfoResource = $resource("/api/profile/:id");
            }
            ProfileService.prototype.getUserInfo = function () {
                return this.userInfoResource.get();
            };
            return ProfileService;
        })();
        Services.ProfileService = ProfileService;
        angular.module("MyApp").service("profileService", ProfileService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=profileService.js.map