namespace MyApp.Services {
    
// Performs gets userProfileInfo from the userViewModel and get's the WebAPI controllers so they can be refered to as somethingResource here, and here we call on those methods in the WebAPI controller through 'save' instead of post etc... We get each resource separately here because the resources (DB tables) are connected to each other by foreign keys. Therefore in order to perform crud on each table I need to get them seperately here.
    export class UserService {
        
        private requestResource;
        private userGearResource;
        private userSpaceResource;
        private userInfoResource;
        private imageResource;
        
        constructor($resource: angular.resource.IResourceService) {

            this.requestResource = $resource("/api/requests/:id"); //api/nameOfServerSideController - Controller/:id
            this.userGearResource = $resource("/api/userGear/:id");
            this.userSpaceResource = $resource("/api/userSpace/:id");
            this.userInfoResource = $resource("/api/profileView/:id", null, {
                findCurrentUser: {
                    method: 'GET',
                    url: '/api/profileView/findCurrentUser',
                    isArray: false
                },
                replyUpdateRequest: {
                    method: 'POST',
                    url: '/api/requests/replyUpdateRequest',
                    isArray: false
                }
            });
            this.imageResource = $resource("/api/images/:id");
        }
        
        // get user info from profile view model
        public getUserInfo() {
            return this.userInfoResource.get();
        }

        public getUserRequest(id: number) {
            return this.requestResource.get({ id: id }).$promise;                     
        }

        public getUserGear(id: number) {
            return this.userGearResource.get({ id: id });
        }

        public getUserSpace(id: number) {
            return this.userSpaceResource.get({id: id});
        }

        public addUserRequest(requestVm) {   
            return this.requestResource.save(requestVm).$promise;   
        }

        public replyUpdateRequest(request) {
            return this.userInfoResource.replyUpdateRequest(request);
        }

        public addImage(image) {
            return this.imageResource.save(image).$promise;
        }

        public deleteImage(id: number) {
            return this.imageResource.remove({ id: id }).$promise;
        }

        public deleteRequest(id: number) {
            return this.requestResource.remove({ id: id }).$promise;
        }

        public addUserGear(gearItem) {
            return this.userGearResource.save(gearItem).$promise;
        }

        public deleteUserGear(id: number) {
            return this.userGearResource.remove({id: id}).$promise;
        }

        public editUserSpace(userSpace) {
            return this.userSpaceResource.save(userSpace).$promise;
        }

        public editUserGear(gearItem) {
            return this.userGearResource.save(gearItem).$promise;
        }

        public editUserRequest(request) {
            return this.requestResource.save(request).$promise;
        }

        public findCurrentUser() {
            return this.userInfoResource.findCurrentUser();
        }
    }
    angular.module("MyApp").service("userService", UserService);
}