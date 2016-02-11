namespace MyApp.Services {

// Handles 
    export class ExploreService {

        private requestResource;
        private detailsRequestResource;

        constructor($resource: angular.resource.IResourceService) {
            this.requestResource = $resource('/api/requests/:id');
            this.detailsRequestResource = $resource('/api/requestView/:id');
        }

        public getRequests() {
            return this.requestResource.query();
        }

        public getRequest(id: number) {
            return this.requestResource.get({ id: id }).$promise;
        }

        public getReplies(id: number) {
            return this.detailsRequestResource.get({ id: id });
        }

        public deleteReply(id: number) {
            return this.detailsRequestResource.remove({ id: id });    
        }

        public addReply(reply) {       
            return this.detailsRequestResource.save(reply);
        }

        public hideReply(reply) {
            return this.detailsRequestResource.save(reply);
        }
    }
    angular.module("MyApp").service('exploreService', ExploreService);
}

