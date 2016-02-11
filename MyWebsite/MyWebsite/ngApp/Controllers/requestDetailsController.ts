namespace MyApp.Controllers {

    export class RequestDetailsController {

        public request;
        public reply;
        public replyView;

        constructor(private exploreService: MyApp.Services.ExploreService, $routeParams: ng.route.IRouteParamsService, private $sce: ng.ISCEService, private userService: MyApp.Services.UserService, private $route: ng.route.IRouteService) {
            let promise = this.exploreService.getRequest($routeParams['id']);
            this.replyView = this.exploreService.getReplies($routeParams['id']);
            promise.then(this.allowAudioUrl);
            this.checkReplyIsRemoved();
        }

        public checkReplyIsRemoved() {

            for (let i = 0; i < this.replyView.replies; i++) {
                if (this.replyView.replies[i].isHidden == true) {
                    this.replyView.replies[i].message = "This reply has been removed by an admin";
                }
            }
        }

        public deleteReply(replyId) {
            this.request.noOfReplies--;
            this.userService.addUserRequest(this.request);
            this.$route.reload();
            return this.exploreService.deleteReply(replyId);
        }

        public hideReply(reply) {
            return this.exploreService.hideReply(reply);
        }

        public userReply() {

            this.reply.requestId = this.request.id;
            this.request.noOfReplies++;
            this.userService.addUserRequest(this.request);
            this.$route.reload();
            return this.exploreService.addReply(this.reply);
        }

        private allowAudioUrl = (data) => {
            let fileUrl = data.fileUrl;
            this.request = data;
            this.request.fileUrl = this.$sce.trustAsResourceUrl(fileUrl);
        }
    }
}