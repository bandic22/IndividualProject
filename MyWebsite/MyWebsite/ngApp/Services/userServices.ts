namespace MyApp.Services {
    
    export class UserService {
        
        private requestResource;
        private userGearResource;
        private userSpaceResource;
        
        constructor($resource: angular.resource.IResourceService) {

            this.requestResource = $resource("/api/requests/:id"); //api/nameOfServerSideController - Controller/:id
            this.userGearResource = $resource("/api/userGear/:id");
            this.userSpaceResource = $resource("/api/userSpace/:id");
        }

        // User Requests
        public getUserRequests() {
            return this.requestResource.query();
        }

        public getUserRequest(id: number) {
            return this.requestResource.get({ id: id });
        }

        public addUserRequest(request) {
            return this.requestResource.save(request).$promise;
        }

        public deleteRequest(id: number) {
            return this.requestResource.remove({ id: id }).$promise;
        }

        // User Gear
        public getUserGears() {
            return this.userGearResource.query();
        }

        public getUserGear(id: number) {
            return this.userGearResource.get({ id: id });
        }

        public addUserGear(gearItem) {
            return this.userGearResource.save(gearItem).$promise;
        }

        public deleteUserGear(id: number) {
            return this.userGearResource.remove({id: id}).$promise;
        }

        // User Space

        public getUserSpace(id: number) {
            return this.userSpaceResource.get({ id: id });
        }

        public addUserSpace(userSpace) {
            return this.userSpaceResource.save(userSpace).$promise;
        }
    }
    angular.module("MyApp").service("userService", UserService);
}