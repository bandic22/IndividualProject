namespace MyApp.Controllers {

    export class ImageModalController {

        constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private userService: MyApp.Services.UserService, private image, private $state: ng.ui.IStateService, private isAuthorized) {

        }

        public addCaption() {
            return this.userService.addImage(this.image).then(() => {
                this.closeModal();
            });
        }

        public deleteImage() {
            return this.userService.deleteImage(this.image.id).then(() => {
                this.closeModal();
            });
        }

        public closeModal() {
            this.$uibModalInstance.close();
        }
    }
}