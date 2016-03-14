namespace MyApp.Controllers {

    export class ProfileController {

        public userProfileInfo;
        public file;
        public image;
        public imageReady = false;
        public showReplies = false;

        constructor(private profileService: MyApp.Services.ProfileService, private userService: MyApp.Services.UserService, private $stateParams: angular.ui.IStateParamsService, private $route: ng.route.IRouteService, private filepickerService, private $location: ng.ILocationService, private $uibModal: ng.ui.bootstrap.IModalService) {
            this.checkRouteParam();
            this.image = {
                fileUrl: '',
                caption: '',
            };
        }

        public checkRouteParam() {
            if (this.$stateParams["displayName"] == "myprofile") {
                this.userProfileInfo = this.getLoggedInUser();
            }
            else {
                this.userProfileInfo = this.profileService.getUserInfoProfile(this.$stateParams["displayName"]);
            }
        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            )
        }

        public fileUploaded(file) {
            this.file = file;
            this.image.fileUrl = this.file.url;
            this.imageReady = true;
            this.addImage();
        }

        public addImage() {
            this.userService.addImage(this.image).then(() => {
                this.imageReady = false;
                this.$route.reload();
            });
        }

        public viewImage(image) {
            debugger;
            this.$uibModal.open({
                templateUrl: "/ngApp/dialogs/imageModal.html",
                controller: MyApp.Controllers.ImageModalController,
                controllerAs: 'modal',
                size: 'lg',
                resolve: {
                    isAuthorized: this.userProfileInfo.isAuthorized,
                    image: () => image,
                }
            });
        }

        public getLoggedInUser() {
            return this.profileService.getUserInfo();
        }

        public editRequest(id: number) {
            return this.userService.getUserRequest(id).then(() => {
                this.$location.path('/profile/myprofile')
            });
        }

        public editGear(id: number) {
            return this.userService.getUserGear(id).then(() => {
                this.$location.path('/profile/myprofile')
            });
        }

        public editSpace(id: number) {
            return this.userService.getUserSpace(id).then(() => {
                this.$location.path('/profile/myprofile')
            });
        }

        public deleteGear(id: number) {
            this.$uibModal.open({
                templateUrl: "/ngApp/dialogs/deleteModal.html",
                controller: MyApp.Controllers.DeleteController,
                controllerAs: 'modal',
                size: 'sm',
                resolve: {
                    item: () => id,
                    type: () => "gear"
                }
            });
        }

        public deleteRequest(id: number) {
            this.$uibModal.open({
                templateUrl: "/ngApp/dialogs/deleteModal.html",
                controller: MyApp.Controllers.DeleteController,
                controllerAs: 'modal',
                size: 'sm',
                resolve: {
                    item: () => id,
                    type: () => "request"
                }
            });
        }

        public deleteImage(id: number) {
            this.$uibModal.open({
                templateUrl: "/ngApp/dialogs/deleteModal.html",
                controller: MyApp.Controllers.DeleteController,
                controllerAs: 'modal',
                size: 'sm',
                resolve: {
                    item: () => id,
                    type: () => "image"
                }
            });
        }
    }
}