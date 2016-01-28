namespace MyApp.Services {

    export class ExploreService {

        private requestResource;
        private replyResource;

        constructor($resource: angular.resource.IResourceService) {
            this.requestResource = $resource('/api/requests/:id');
            this.replyResource = $resource('/api/replies/:id');
        }

        public getRequests() {
            return this.requestResource.query();
        }

        public getRequest(id: number) {
            return this.requestResource.get({id: id});
        }

        public getReplies(id: number) {
            return this.replyResource.query({ id: id });

        }

        public addReply(reply) {       
            return this.replyResource.save(reply);
        }


    }
    angular.module("MyApp").service('exploreService', ExploreService);
}

