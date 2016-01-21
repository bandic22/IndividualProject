namespace MyApp.Controllers {

    export class EditProfileController {

        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }
}