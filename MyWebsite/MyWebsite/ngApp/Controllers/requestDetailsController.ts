namespace MyApp.Controllers {

    export class RequestDetailsController {

        public request;
        public reply;
        public replyView;
        public rating;
        public currentUser;

        constructor(private exploreService: MyApp.Services.ExploreService, $stateParams: ng.ui.IStateParamsService, private $sce: ng.ISCEService, private userService: MyApp.Services.UserService, private $state: ng.ui.IStateService, private accountService: MyApp.Services.AccountService, private $uibModal: ng.ui.bootstrap.IModalService) {
            this.currentUser = this.userService.findCurrentUser();
            let promise = this.exploreService.getRequest($stateParams['id']);
            this.exploreService.getReplies($stateParams['id']).then((result) => {
                this.replyView = result;
                this.checkUserRatings();
                this.checkReplyIsRemoved();
            });           
            promise.then(this.allowAudioUrl);                   
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
            for (let reply of this.replyView.replies) {
                if (reply.ratings.length == 0) {
                    if (this.accountService.isLoggedIn()) {
                        reply.canNotRate = false;
                    }
                }
                else {
                    for (let rating of reply.ratings) {
                        if (this.accountService.isLoggedIn() && rating.userId == this.currentUser.id) {
                            reply.canNotRate = true;
                        }
                        else if (this.accountService.isLoggedIn() && rating.userId != this.currentUser.id) {
                            reply.canNotRate = false;
                        }
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
                this.$state.reload()
            });
        }

        public userReply() {
            this.request.noOfReplies++;
            this.request.fileUrl = this.replyView.request.fileUrl;
            this.userService.addUserRequest(this.request);
            this.reply.requestId = this.request.id;
            return this.exploreService.addReply(this.reply).then(() => {
                this.$state.reload()
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
            this.exploreService.addRating(this.rating).then(() => {
                this.$state.reload()
            });
        }

        private allowAudioUrl = (data) => {
            let fileUrl = data.fileUrl;
            this.request = data;
            this.request.fileUrl = this.$sce.trustAsResourceUrl(fileUrl);   
        }
    }
}