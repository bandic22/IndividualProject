var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($location, $uibModal) {
                this.$location = $location;
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.getNewUser = function () {
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
            HomeController.prototype.login = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/loginDialog.html",
                    controller: "dialogController",
                    controllerAs: "modal",
                    size: "sm"
                });
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var ProfileController = (function () {
            function ProfileController($uibModal) {
                this.$uibModal = $uibModal;
            }
            // open new modal upon clicking add new request button
            ProfileController.prototype.addNewRequest = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                    controller: "dialogController",
                    controllerAs: "modal",
                    size: "lg"
                });
            };
            ProfileController.prototype.addNewGear = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                    controller: "dialogController",
                    controllerAs: "modal",
                    size: "lg"
                });
            };
            ProfileController.prototype.addUserSpace = function () {
                this.$uibModal.open({
                    templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                    controller: "dialogController",
                    controllerAs: "modal",
                    size: "lg"
                });
            };
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
        var ProfileDetailsController = (function () {
            function ProfileDetailsController() {
            }
            return ProfileDetailsController;
        })();
        Controllers.ProfileDetailsController = ProfileDetailsController;
        var DialogController = (function () {
            function DialogController($uibModalInstance, filepickerService, $scope) {
                this.$uibModalInstance = $uibModalInstance;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            DialogController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: '/image' }, this.fileUploaded.bind(this), this.$uibModalInstance.close());
            };
            DialogController.prototype.fileUploaded = function (file) {
                // save file url to database
                this.file = file;
                this.$scope.$apply(); // force page to update
            };
            DialogController.prototype.submit = function () {
                this.$uibModalInstance.close();
                //something to submit info
            };
            DialogController.prototype.close = function () {
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
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
        // Registering the controllers with the main module.
        angular.module("MyApp").controller("homeController", HomeController);
        angular.module("MyApp").controller("profileController", ProfileController);
        angular.module("MyApp").controller("exploreController", ExploreController);
        angular.module("MyApp").controller("dialogController", DialogController);
        angular.module("MyApp").controller("aboutController", AboutController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
