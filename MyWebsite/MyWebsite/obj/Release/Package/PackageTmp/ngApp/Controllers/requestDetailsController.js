var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var RequestDetailsController = (function () {
            function RequestDetailsController(exploreService, $stateParams, $sce, userService, $state, accountService, $uibModal) {
                var _this = this;
                this.exploreService = exploreService;
                this.$sce = $sce;
                this.userService = userService;
                this.$state = $state;
                this.accountService = accountService;
                this.$uibModal = $uibModal;
                this.allowAudioUrl = function (data) {
                    var fileUrl = data.fileUrl;
                    _this.request = data;
                    _this.request.fileUrl = _this.$sce.trustAsResourceUrl(fileUrl);
                };
                this.currentUser = this.userService.findCurrentUser();
                var promise = this.exploreService.getRequest($stateParams['id']);
                this.exploreService.getReplies($stateParams['id']).then(function (result) {
                    _this.replyView = result;
                    _this.checkUserRatings();
                    _this.checkReplyIsRemoved();
                });
                promise.then(this.allowAudioUrl);
                this.rating = {
                    isApproval: null,
                };
            }
            RequestDetailsController.prototype.checkReplyIsRemoved = function () {
                for (var _i = 0, _a = this.replyView.replies; _i < _a.length; _i++) {
                    var reply = _a[_i];
                    if (reply.isHidden == true) {
                        reply.message = "This reply has been removed by an admin";
                    }
                }
            };
            RequestDetailsController.prototype.checkUserRatings = function () {
                for (var _i = 0, _a = this.replyView.replies; _i < _a.length; _i++) {
                    var reply = _a[_i];
                    if (reply.ratings.length == 0) {
                        if (this.accountService.isLoggedIn()) {
                            reply.canNotRate = false;
                        }
                    }
                    else {
                        for (var _b = 0, _c = reply.ratings; _b < _c.length; _b++) {
                            var rating = _c[_b];
                            if (this.accountService.isLoggedIn() && rating.userId == this.currentUser.id) {
                                reply.canNotRate = true;
                            }
                            else if (this.accountService.isLoggedIn() && rating.userId != this.currentUser.id) {
                                reply.canNotRate = false;
                            }
                        }
                    }
                }
            };
            RequestDetailsController.prototype.deleteReply = function (replyId) {
                this.request.noOfReplies--;
                this.userService.addUserRequest(this.request);
                this.$uibModal.open({
                    templateUrl: "/ngApp/dialogs/deleteModal.html",
                    controller: MyApp.Controllers.DeleteController,
                    controllerAs: 'modal',
                    size: 'sm',
                    resolve: {
                        item: function () { return replyId; },
                        type: function () { return "reply"; }
                    }
                });
            };
            RequestDetailsController.prototype.hideReply = function (reply) {
                var _this = this;
                reply.isHidden = true;
                var data = this.exploreService.hideReply(reply);
                return data.then(function () {
                    _this.$state.reload();
                });
            };
            RequestDetailsController.prototype.userReply = function () {
                var _this = this;
                this.request.noOfReplies++;
                this.request.fileUrl = this.replyView.request.fileUrl;
                this.userService.replyUpdateRequest(this.request);
                this.reply.requestId = this.request.id;
                return this.exploreService.addReply(this.reply).then(function () {
                    _this.$state.reload();
                });
            };
            RequestDetailsController.prototype.addReplyRating = function (replyId, rating) {
                var _this = this;
                if (rating == 1) {
                    this.rating.isApproval = true;
                    this.rating.replyId = replyId;
                }
                else {
                    this.rating.isApproval = false;
                    this.rating.replyId = replyId;
                }
                this.exploreService.addRating(this.rating).then(function () {
                    _this.$state.reload();
                });
            };
            return RequestDetailsController;
        })();
        Controllers.RequestDetailsController = RequestDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=requestDetailsController.js.map