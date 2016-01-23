namespace MyApp.Controllers {

    export class ExploreController {
        
        public request;
        public requests;

        constructor(private mainService: MyApp.Services.MainService, private $resource: ng.resource.IResourceService, private $location: ng.ILocationService) {
            
            this.requests = mainService.getRequests();
        }

        public getRequest(id: number) {
            this.request = this.mainService.getRequest(id);
            
        }

        public addRequest() {

            return this.mainService.addRequest(this.request);
        }

        public deleteRequest(id: number) {

            return this.mainService.deleteRequest(id); // add .then, change path
        }

    }

}