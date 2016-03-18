var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        // Handles 
        var ExploreService = (function () {
            function ExploreService($resource) {
                this.requestResource = $resource('/api/requests/:id');
                this.detailsRequestResource = $resource('/api/requestView/:id');
                this.ratingResource = $resource('/api/replyRatings/:id');
            }
            ExploreService.prototype.getRequests = function () {
                return this.requestResource.query().$promise;
            };
            ExploreService.prototype.getRequest = function (id) {
                return this.requestResource.get({ id: id }).$promise;
            };
            ExploreService.prototype.getReplies = function (id) {
                return this.detailsRequestResource.get({ id: id }).$promise;
            };
            ExploreService.prototype.deleteReply = function (id) {
                return this.detailsRequestResource.remove({ id: id }).$promise;
            };
            ExploreService.prototype.addReply = function (reply) {
                return this.detailsRequestResource.save(reply).$promise;
            };
            ExploreService.prototype.hideReply = function (reply) {
                return this.detailsRequestResource.save(reply).$promise;
            };
            ExploreService.prototype.addRating = function (rating) {
                return this.ratingResource.save(rating).$promise;
            };
            return ExploreService;
        })();
        Services.ExploreService = ExploreService;
        angular.module("MyApp").service('exploreService', ExploreService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=exploreServices.js.map