var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var RequestDetailsController = (function () {
            function RequestDetailsController(exploreService, $resource, $location, $routeParams) {
                this.exploreService = exploreService;
                this.$resource = $resource;
                this.$location = $location;
                this.request = this.exploreService.getRequest($routeParams['id']);
                this.replyView = this.exploreService.getReplies($routeParams['id']);
            }
            RequestDetailsController.prototype.userReply = function () {
                this.reply.requestId = this.request.id;
                return this.exploreService.addReply(this.reply);
            };
            return RequestDetailsController;
        })();
        Controllers.RequestDetailsController = RequestDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
