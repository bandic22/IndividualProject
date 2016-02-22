namespace MyApp.Controllers {

    export class RequestDetailsController {

        public request;
        public reply;
        public replyView;
        public rating;
        public currentUser;

        constructor(private exploreService: MyApp.Services.ExploreService, $routeParams: ng.route.IRouteParamsService, private $sce: ng.ISCEService, private userService: MyApp.Services.UserService, private $route: ng.route.IRouteService, private accountService: MyApp.Services.AccountService, private $uibModal: ng.ui.bootstrap.IModalService) {
            let promise = this.exploreService.getRequest($routeParams['id']);
            this.exploreService.getReplies($routeParams['id']).then((result) => {
                this.replyView = result;
                this.checkUserRatings();
                this.checkReplyIsRemoved();
            });
            promise.then(this.allowAudioUrl);
            this.currentUser = this.userService.findCurrentUser();
            this.rating = {
                isApproval: null,
            };
        }

        public checkReplyIsRemoved() {
            for (let reply of this.replyView.replies) {
                if (reply.isHidden == true) {
                    reply.message = "This reply has been removed by an admin";
                }
            }
        }

        public checkUserRatings() {
            debugger;
            for (let reply of this.replyView.replies) {
                for (let rating of reply.ratings) {
                    if (!this.accountService.isLoggedIn()) {
                        reply.canNotRate = true;
                        break;
                    }
                    else if (this.accountService.isLoggedIn() && rating.userId == this.currentUser.id) {
                        reply.canNotRate = true;
                        break;
                    }
                    else if (this.accountService.isLoggedIn() && rating.userId != this.currentUser.id) {
                        reply.canNotRate = false;
                    }
                }
            }
        }

        public deleteReply(replyId) {
            this.request.noOfReplies--;
            this.userService.addUserRequest(this.request);
            this.$uibModal.open({
                templateUrl: "/ngApp/dialogs/deleteModal.html",
                controller: MyApp.Controllers.DeleteController,
                controllerAs: 'modal',
                size: 'sm',
                resolve: {
                    item: () => replyId,
                    type: () => "reply"
                }
            });
        }

        public hideReply(reply) {
            reply.isHidden = true;
            let data = this.exploreService.hideReply(reply);
            return data.then(() => {
                this.$route.reload()
            });
        }

        public userReply() {
            this.request.noOfReplies++;
            this.userService.addUserRequest(this.request);
            this.reply.requestId = this.request.id;
            return this.exploreService.addReply(this.reply).then(() => {
                this.$route.reload()
            });
        }

        public addReplyRating(replyId: number, rating: number) {
            if (rating == 1) {
                this.rating.isApproval = true;
                this.rating.replyId = replyId;
            }
            else {
                this.rating.isApproval = false;
                this.rating.replyId = replyId;
            }
            this.exploreService.addRating(this.rating);
            this.$route.reload();
        }

        private allowAudioUrl = (data) => {
            let fileUrl = data.fileUrl;
            this.request = data;
            this.request.fileUrl = this.$sce.trustAsResourceUrl(fileUrl);
        }
    }
}