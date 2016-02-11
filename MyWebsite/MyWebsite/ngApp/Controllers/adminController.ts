namespace MyApp.Controllers {

    export class AdminController {

        public adminResource;
        public profileResource;

        constructor(private $location: ng.ILocationService, private adminService: MyApp.Services.AdminService, private profileService: MyApp.Services.ProfileService) {          
            this.adminResource = adminService.getAdminResource();           
        }

        public getUserProfile(displayName) {
            
            //this.profileService.getUserInfoProfile(displayName);
            //debugger;
            this.$location.path('/profile/' + displayName);
        }
    }
}