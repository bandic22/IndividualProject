var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        // gets the user profile view model info
        var ProfileService = (function () {
            function ProfileService($resource) {
                this.userInfoResource = $resource("/api/profileView/:id");
                this.visitUserResource = $resource("/api/visitUser");
            }
            ProfileService.prototype.getUserInfoProfile = function (displayName) {
                return this.visitUserResource.get({ displayName: displayName });
            };
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