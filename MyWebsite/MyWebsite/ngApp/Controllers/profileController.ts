namespace MyApp.Controllers {

    export class ProfileController {

        public request; 
        public requests;

        constructor(private $uibModal: ng.ui.bootstrap.IModalService, private mainService: MyApp.Services.MainService, private $resource: ng.resource.IResourceService, private $location: ng.ILocationService) {

        }

        public editProfile() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/editProfileDialog.html",
                controller: MyApp.Controllers.EditProfileModalController,
                controllerAs: "modal",
                size: "sm"
            })
        }

        public getRequest(id: number) {
            this.request = this.mainService.getRequest(id);

        }

        //public addRequest() {

        //    return this.mainService.addRequest(this.request);
        //}

        public deleteRequest(id: number) {

            return this.mainService.deleteRequest(id); // add .then, change path
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