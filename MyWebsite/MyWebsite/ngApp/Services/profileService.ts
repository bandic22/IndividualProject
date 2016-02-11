namespace MyApp.Services {

// gets the user profile view model info
    export class ProfileService {

        public userInfoResource;
        public visitUserResource;

        constructor($resource: ng.resource.IResourceService) {

            this.userInfoResource = $resource("/api/profileView/:id");
            this.visitUserResource = $resource("/api/visitUser");

        }

        public getUserInfoProfile(displayName: string) {
            return this.visitUserResource.get({ displayName: displayName });
        }

        public getUserInfo() {
            return this.userInfoResource.get();
        }
    }
    angular.module("MyApp").service("profileService", ProfileService);
}