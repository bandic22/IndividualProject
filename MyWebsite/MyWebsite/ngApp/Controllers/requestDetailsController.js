var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var RequestDetailsController = (function () {
            function RequestDetailsController(exploreService, $routeParams, $sce, userService, $route) {
                var _this = this;
                this.exploreService = exploreService;
                this.$sce = $sce;
                this.userService = userService;
                this.$route = $route;
                this.allowAudioUrl = function (data) {
                    var fileUrl = data.fileUrl;
                    _this.request = data;
                    _this.request.fileUrl = _this.$sce.trustAsResourceUrl(fileUrl);
                };
                var promise = this.exploreService.getRequest($routeParams['id']);
                this.replyView = this.exploreService.getReplies($routeParams['id']);
                promise.then(this.allowAudioUrl);
                this.checkReplyIsRemoved();
            }
            RequestDetailsController.prototype.checkReplyIsRemoved = function () {
                for (var i = 0; i < this.replyView.replies; i++) {
                    if (this.replyView.replies[i].isHidden == true) {
                        this.replyView.replies[i].message = "This reply has been removed by an admin";
                    }
                }
            };
            RequestDetailsController.prototype.deleteReply = function (replyId) {
                this.request.noOfReplies--;
                this.userService.addUserRequest(this.request);
                this.$route.reload();
                return this.exploreService.deleteReply(replyId);
            };
            RequestDetailsController.prototype.hideReply = function (reply) {
                return this.exploreService.hideReply(reply);
            };
            RequestDetailsController.prototype.userReply = function () {
                this.reply.requestId = this.request.id;
                this.request.noOfReplies++;
                this.userService.addUserRequest(this.request);
                this.$route.reload();
                return this.exploreService.addReply(this.reply);
            };
            return RequestDetailsController;
        })();
        Controllers.RequestDetailsController = RequestDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
