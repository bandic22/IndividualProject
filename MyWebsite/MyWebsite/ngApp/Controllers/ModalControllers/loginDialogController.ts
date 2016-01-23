namespace MyApp.Controllers {

    export class LoginDialogController {

        constructor(private $location: ng.ILocationService, private $uibModal: angular.ui.bootstrap.IModalService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }
}