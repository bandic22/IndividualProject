var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var SignUpService = (function () {
            function SignUpService($location) {
                this.$location = $location;
            }
            SignUpService.prototype.createUser = function ($location) {
            };
            return SignUpService;
        })();
        Services.SignUpService = SignUpService;
        var HomeService = (function () {
            function HomeService() {
            }
            HomeService.prototype.getUserLogin = function () {
            };
            return HomeService;
        })();
        Services.HomeService = HomeService;
        angular.module("MyApp").service("Services", SignUpService);
        angular.module("MyApp").service("Services", HomeService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appServices.js.map