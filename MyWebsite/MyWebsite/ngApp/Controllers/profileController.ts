namespace MyApp.Controllers {

    export class ProfileController {

        public userProfileInfo;

        constructor(private $uibModal: ng.ui.bootstrap.IModalService, private $resource: ng.resource.IResourceService, private $location: ng.ILocationService, private profileService: MyApp.Services.ProfileService, private userService: MyApp.Services.UserService) {

            this.userProfileInfo = profileService.getUserInfo();
        }

        public deleteGear(id: number) {
            return this.userService.deleteUserGear(id);
        }

        public deleteRequest(id: number) {
            return this.userService.deleteRequest(id);
        }

        public addNewRequest() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                controller: MyApp.Controllers.ReqDialogController,
                controllerAs: "modal",
                size: "sm",              
            });
        }

        public addNewGear() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                controller: MyApp.Controllers.GearDialogController,
                controllerAs: "modal",
                size: "sm"
            });
        }

        public addUserSpace() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                controller: MyApp.Controllers.SpaceDialogController,
                controllerAs: "modal",
                size: "sm"
            });
        }

        public editRequest() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                controller: MyApp.Controllers.ReqDialogController,
                controllerAs: "modal",
                size: "sm"
            });
        }

        public editGear() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                controller: MyApp.Controllers.GearDialogController,
                controllerAs: "modal",
                size: "sm",
            });
        }

        public editSpace() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                controller: MyApp.Controllers.SpaceDialogController,
                controllerAs: "modal",
                size: "sm"
            });
        }

        public editProfile() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/editProfileDialog.html",
                controller: MyApp.Controllers.EditProfileModalController,
                controllerAs: "modal",
                size: "sm"
            });
        }
    }
}