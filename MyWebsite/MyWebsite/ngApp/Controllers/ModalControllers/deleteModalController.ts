namespace MyApp.Controllers {

    export class DeleteController {

        constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private item, private type, private userService: MyApp.Services.UserService, private $route: ng.route.IRouteService, private exploreService: MyApp.Services.ExploreService) {

        }

        public checkDelete() {
            switch (this.type) {
                case "request":
                    return this.userService.deleteRequest(this.item).then(() =>
                        this.closeModal())
                    break;
                case "gear":
                    return this.userService.deleteUserGear(this.item).then(() =>
                        this.closeModal())
                    break;
                case "image":
                    return this.userService.deleteImage(this.item).then(() =>
                        this.closeModal())                      
                    break;
                case "reply":
                    return this.exploreService.deleteReply(this.item).then(() =>
                        this.closeModal())
                    break;
            }
        }

        public closeModal() {
            this.$uibModalInstance.close();
            this.$route.reload();
        }
    }
}