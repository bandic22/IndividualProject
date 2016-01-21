namespace MyApp.Controllers {

    export class ProfileController {

        constructor(private $uibModal: ng.ui.bootstrap.IModalService) {

        }

        public editProfile() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/editProfileDialog.html",
                controller: MyApp.Controllers.EditProfileController,
                controllerAs: "modal",
                size: "sm"
            })
        }

        public addNewGear() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                controller: MyApp.Controllers.GearDialogController,
                controllerAs: "modal",
                size: "sm"
            })
        }

        public addUserSpace() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                controller: MyApp.Controllers.SpaceDialogController,
                controllerAs: "modal",
                size: "sm"
            })
        }

        public addNewRequest() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                controller: MyApp.Controllers.ReqDialogController,
                controllerAs: "modal",
                size: "sm"
            })
        }

    }
}