namespace MyApp.Controllers {

    export class RequestDetailsController {

        public request;
        public reply;
        public replyView;

        constructor(private exploreService: MyApp.Services.ExploreService, private $resource: ng.resource.IResourceService, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {

            this.request = this.exploreService.getRequest($routeParams['id']);
            this.replyView = this.exploreService.getReplies($routeParams['id']);           
        }

        public userReply() {
            this.reply.requestId = this.request.id;
            return this.exploreService.addReply(this.reply);
        }
    }
}