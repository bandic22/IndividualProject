var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SignUpController = (function () {
            function SignUpController($location) {
                this.$location = $location;
            }
            SignUpController.prototype.getNewUser = function () {
                this.newUser = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    dateOfBirth: this.dateOfBirth,
                    userName: this.userName,
                    emailAddress: this.emailAddress,
                    password: this.password
                };
                //localStorage.setItem("User", JSON.stringify(this.newUser));
                this.$location.path("/profile");
                console.log(this.newUser);
            };
            return SignUpController;
        })();
        Controllers.SignUpController = SignUpController;
        var ProfileController = (function () {
            function ProfileController($uibModal, filepickerService, $scope) {
                this.$uibModal = $uibModal;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            ProfileController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            ProfileController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.file = file;
                this.$scope.$apply(); // force page to update
            };
            ProfileController.prototype.addNewRequest = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                    controller: "DialogController",
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
        var DialogController = (function () {
            function DialogController($uibModalInstance) {
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        })();
        Controllers.DialogController = DialogController;
        var ExploreController = (function () {
            function ExploreController() {
            }
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
        // Registering the controllers with the main module.
        angular.module("MyApp").controller("signUpController", SignUpController);
        angular.module("MyApp").controller("profileController", ProfileController);
        angular.module("MyApp").controller("exploreController", ExploreController);
        angular.module("MyApp").controller("dialogController", DialogController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appControllers.js.map