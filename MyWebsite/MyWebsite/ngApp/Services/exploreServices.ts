namespace MyApp.Services {

// Handles 
    export class ExploreService {

        private requestResource;
        private detailsRequestResource;
        private ratingResource;

        constructor($resource: angular.resource.IResourceService) {
            this.requestResource = $resource('/api/requests/:id');
            this.detailsRequestResource = $resource('/api/requestView/:id');
            this.ratingResource = $resource('/api/replyRatings/:id');
        }

        public getRequests() {
            return this.requestResource.query().$promise;
        }

        public getRequest(id: number) {
            return this.requestResource.get({ id: id }).$promise;
        }

        public getReplies(id: number) {
            return this.detailsRequestResource.get({ id: id }).$promise;
        }

        public deleteReply(id: number) {
            return this.detailsRequestResource.remove({ id: id }).$promise;    
        }

        public addReply(reply) {       
            return this.detailsRequestResource.save(reply).$promise;
        }

        public hideReply(reply) {
            return this.detailsRequestResource.save(reply).$promise;
        }

        public addRating(rating) {
            return this.ratingResource.save(rating).$promise;
        }
    }
    angular.module("MyApp").service('exploreService', ExploreService);
}

