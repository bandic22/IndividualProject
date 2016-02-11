namespace MyApp.Controllers {

    export class ProfileController {

        public userProfileInfo;

        constructor(private profileService: MyApp.Services.ProfileService, private userService: MyApp.Services.UserService, private $routeParams: angular.route.IRouteParamsService, private $route: ng.route.IRouteService) {          
            this.checkRouteParam();
        }

        public checkRouteParam() {
            if (this.$routeParams["displayName"] == "myprofile") {
                this.userProfileInfo = this.getLoggedInUser();
            }
            else {
                this.userProfileInfo = this.profileService.getUserInfoProfile(this.$routeParams["displayName"]);
            }
        }

        public getLoggedInUser() {
            return this.profileService.getUserInfo();
        }

        public editRequest(id: number) {
            return this.userService.getUserRequest(id);           
        }

        public editGear(id: number) {
            return this.userService.getUserGear(id);
        }

        public editSpace(id: number) {
            return this.userService.getUserSpace(id);
        }

        public deleteGear(id: number) {
            return this.userService.deleteUserGear(id).then(() =>
                this.$route.reload());
        }

        public deleteRequest(id: number) {
            return this.userService.deleteRequest(id).then(() =>
                this.$route.reload());
        }
    }
}