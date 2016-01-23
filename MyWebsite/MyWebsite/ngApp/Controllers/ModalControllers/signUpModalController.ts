namespace MyApp.Controllers {

    export class SignUpModalController {

        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }
}