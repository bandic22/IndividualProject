namespace MyApp.Services {

    export class MainService {

        private requestResource;

        constructor($resource: angular.resource.IResourceService) {

            this.requestResource = $resource('/api/requests/:id');

        }

        public getRequests() {

            return this.requestResource.query();
        }

        public getRequest(id: number) {

            return this.requestResource.get({ id: id });
        }

        public addRequest(request) {

            return this.requestResource.save(request).$promise;

        }

        public deleteRequest(id: number) {

            return this.requestResource.delete({ id: id }).$promise;
        }
    }
    angular.module("MyApp").service('mainService', MainService);
}

