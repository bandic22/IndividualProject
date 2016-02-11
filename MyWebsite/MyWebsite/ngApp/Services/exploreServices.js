var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        // Handles 
        var ExploreService = (function () {
            function ExploreService($resource) {
                this.requestResource = $resource('/api/requests/:id');
                this.detailsRequestResource = $resource('/api/requestView/:id');
            }
            ExploreService.prototype.getRequests = function () {
                return this.requestResource.query();
            };
            ExploreService.prototype.getRequest = function (id) {
                return this.requestResource.get({ id: id }).$promise;
            };
            ExploreService.prototype.getReplies = function (id) {
                return this.detailsRequestResource.get({ id: id });
            };
            ExploreService.prototype.deleteReply = function (id) {
                return this.detailsRequestResource.remove({ id: id });
            };
            ExploreService.prototype.addReply = function (reply) {
                return this.detailsRequestResource.save(reply);
            };
            ExploreService.prototype.hideReply = function (reply) {
                return this.detailsRequestResource.save(reply);
            };
            return ExploreService;
        })();
        Services.ExploreService = ExploreService;
        angular.module("MyApp").service('exploreService', ExploreService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
