namespace MyApp.Controllers {

    export class GearDialogController {

        public gearItem;

        constructor(private $location: ng.ILocationService, private userService: MyApp.Services.UserService) {

        }

        public addGear() {
            return this.userService.addUserGear(this.gearItem).then(() => {
                this.$location.path("/profile/myprofile");
            });
        }

        public editGear() {



        }
      
        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}