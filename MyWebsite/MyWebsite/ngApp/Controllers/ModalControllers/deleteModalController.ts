namespace MyApp.Controllers {

    export class DeleteController {

        constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private item, private type, private userService: MyApp.Services.UserService, private $state: ng.ui.IStateService, private exploreService: MyApp.Services.ExploreService) {

        }

        public checkDelete() {
            switch (this.type) {
                case "request":
                    return this.userService.deleteRequest(this.item).then(() =>
                        this.closeModalReload())
                    break;
                case "gear":
                    return this.userService.deleteUserGear(this.item).then(() =>
                        this.closeModalReload())
                    break;
                case "image":
                    return this.userService.deleteImage(this.item).then(() =>
                        this.closeModalReload())                      
                    break;
                case "reply":
                    return this.exploreService.deleteReply(this.item).then(() =>
                        this.closeModalReload())
                    break;
            }
        }

        public closeModalReload() {
            this.$uibModalInstance.close();
            this.$state.reload();
        }

        public closeModal() {
            this.$uibModalInstance.close();
        }
    }
}