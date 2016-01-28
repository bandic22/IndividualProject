namespace MyApp.Controllers {

    export class EditProfileModalController {

        public user;

        constructor(private userService: MyApp.Services.UserService, private $uibModal: angular.ui.bootstrap.IModalService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }
}