namespace MyApp.Controllers {

    export class PromptController {

        constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private userService: MyApp.Services.UserService, private exploreService: MyApp.Services.ExploreService, private adminService: MyApp.Services.AdminService) {
            
        }

        public deleteConfirm(input: string, id: number) {

            switch (input) {
                
                case "Reply":

                    break;
                case "GearItem":
                    
                    break;
                case "Request":

                    break;
                case "Image":

                    break;
            }
        }

        public confirmTOS() {

        
        }
    }
}