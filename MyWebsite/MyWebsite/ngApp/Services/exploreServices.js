var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ExploreService = (function () {
            function ExploreService($resource) {
                this.requestResource = $resource('/api/requests/:id');
                this.replyResource = $resource('/api/requestExplore/:id');
            }
            ExploreService.prototype.getRequests = function () {
                return this.requestResource.query();
            };
            ExploreService.prototype.getRequest = function (id) {
                return this.requestResource.get({ id: id });
            };
            ExploreService.prototype.getReplies = function (id) {
                return this.replyResource.get({ id: id });
            };
            ExploreService.prototype.addReply = function (reply) {
                return this.replyResource.save(reply);
            };
            return ExploreService;
        })();
        Services.ExploreService = ExploreService;
        angular.module("MyApp").service('exploreService', ExploreService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
