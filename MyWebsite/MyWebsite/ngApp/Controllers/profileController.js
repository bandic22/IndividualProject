var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController($uibModal) {
                this.$uibModal = $uibModal;
            }
            ProfileController.prototype.editProfile = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/editProfileDialog.html",
                    controller: MyApp.Controllers.EditProfileController,
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
            ProfileController.prototype.addNewRequest = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                    controller: MyApp.Controllers.ReqDialogController,
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
