namespace MyApp.Controllers {

    export class ExploreController {
        
        public requests;

        constructor(private exploreService: MyApp.Services.ExploreService, private $resource: ng.resource.IResourceService, private $location: ng.ILocationService) {
            
            this.requests = exploreService.getRequests();
        }
    }
}