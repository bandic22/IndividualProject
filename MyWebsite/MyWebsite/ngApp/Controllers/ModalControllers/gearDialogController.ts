namespace MyApp.Controllers {

    export class GearDialogController {

        public gearItem;

        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private userService: MyApp.Services.UserService) {

        }

        public addGear() {
            return this.userService.addUserGear(this.gearItem).then(() => {
                this.$uibModalInstance.close();
            });
        }

        public editGear() {



        }
      
        public cancel() {
            this.$uibModalInstance.close();
        }
    }
}