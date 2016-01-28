namespace MyApp.Services {

    export class ProfileService {

        public userInfoResource;

        constructor($resource: ng.resource.IResourceService) {

            this.userInfoResource = $resource("/api/profile/:id");

        }

        public getUserInfo() {

            return this.userInfoResource.get();
        }
    }
    angular.module("MyApp").service("profileService", ProfileService);
}