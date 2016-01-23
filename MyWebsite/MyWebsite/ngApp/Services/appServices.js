var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MainService = (function () {
            function MainService($resource) {
                this.requestResource = $resource('/api/requests/:id');
            }
            MainService.prototype.getRequests = function () {
                return this.requestResource.query();
            };
            MainService.prototype.getRequest = function (id) {
                return this.requestResource.get({ id: id });
            };
            MainService.prototype.addRequest = function (request) {
                return this.requestResource.save(request).$promise;
            };
            MainService.prototype.deleteRequest = function (id) {
                return this.requestResource.delete({ id: id }).$promise;
            };
            return MainService;
        })();
        Services.MainService = MainService;
        angular.module("MyApp").service('mainService', MainService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appServices.js.map