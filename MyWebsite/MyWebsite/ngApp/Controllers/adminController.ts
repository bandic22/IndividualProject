namespace MyApp.Controllers {

    export class AdminController {

        public adminResource;
        public profileResource;
        public sortType = 'memberSince';
        public sortReverse = false;

        public totalItems;
        public currentPage = 1;
        public maxSize = 5;
        public itemsPerPage = 5;

        constructor(private $location: ng.ILocationService, private adminService: MyApp.Services.AdminService) {
            debugger; //fix this resolve
            this.adminService.getAdminResource().then((result) => {   
                this.totalItems = result.users.length;     
                this.adminResource = result;        
            });           
        }

        public getUserProfile(displayName) {            
            this.$location.path('/profile/' + displayName);
        }
    }
}