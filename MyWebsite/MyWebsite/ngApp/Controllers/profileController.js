var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController($uibModal, $resource, $location, profileService, userService) {
                this.$uibModal = $uibModal;
                this.$resource = $resource;
                this.$location = $location;
                this.profileService = profileService;
                this.userService = userService;
                this.userProfileInfo = profileService.getUserInfo();
            }
            ProfileController.prototype.deleteGear = function (id) {
                return this.userService.deleteUserGear(id);
            };
            ProfileController.prototype.deleteRequest = function (id) {
                return this.userService.deleteRequest(id);
            };
            ProfileController.prototype.addNewRequest = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                    controller: MyApp.Controllers.ReqDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            ProfileController.prototype.addNewGear = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                    controller: MyApp.Controllers.GearDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            ProfileController.prototype.addUserSpace = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                    controller: MyApp.Controllers.SpaceDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            ProfileController.prototype.editRequest = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                    controller: MyApp.Controllers.ReqDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            ProfileController.prototype.editGear = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                    controller: MyApp.Controllers.GearDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            ProfileController.prototype.editSpace = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                    controller: MyApp.Controllers.SpaceDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            ProfileController.prototype.editProfile = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/editProfileDialog.html",
                    controller: MyApp.Controllers.EditProfileModalController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=profileController.js.map