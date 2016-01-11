namespace MyApp.Controllers {

    export class SignUpController {

        public newUser: {};

        private firstName: string;
        private lastName: string;
        private dateOfBirth;
        private userName: string;
        private emailAddress: string;
        private password: string;

        constructor(private $location: ng.ILocationService) {

        }

        public getNewUser() {
            this.newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                dateOfBirth: this.dateOfBirth,
                userName: this.userName,
                emailAddress: this.emailAddress,
                password: this.password
            }

            //localStorage.setItem("User", JSON.stringify(this.newUser));
            this.$location.path("/profile");
            console.log(this.newUser);
        }
    }

    export class ProfileController {

        public file;

        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private filepickerService, private $scope: ng.IScope) {


        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }

        public addNewRequest() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                controller: "DialogController",
                controllerAs: "modal",
                size: "sm"
            });

        }
    }

    export class DialogController {
        
        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }

        public ok() {
            this.$uibModalInstance.close();
        }

    }

    export class ExploreController {

        constructor() {

        }

    }

    // Registering the controllers with the main module.
    angular.module("MyApp").controller("signUpController", SignUpController);
    angular.module("MyApp").controller("profileController", ProfileController);
    angular.module("MyApp").controller("exploreController", ExploreController);
    angular.module("MyApp").controller("dialogController", DialogController);
}

