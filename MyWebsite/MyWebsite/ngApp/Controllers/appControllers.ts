namespace MyApp.Controllers {

    export class HomeController {

        public newUser: {};

        private firstName: string;
        private lastName: string;
        private dateOfBirth;
        private userName: string;
        private emailAddress: string;
        private password: string;

        constructor(private $location: ng.ILocationService, private $uibModal: angular.ui.bootstrap.IModalService) {

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

        public login() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/loginDialog.html",
                controller: "dialogController",
                controllerAs: "modal",
                size: "sm"
            })

        }
    }

    export class ProfileController {

        constructor(private $uibModal: angular.ui.bootstrap.IModalService) {

        }
        // open new modal upon clicking add new request button
        public addNewRequest() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newReqDialog.html",
                controller: "dialogController",
                controllerAs: "modal",
                size: "lg"
            })
        }

        public addNewGear() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newGearDialog.html",
                controller: "dialogController",
                controllerAs: "modal",
                size: "lg"
            })
        }

        public addUserSpace() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/newSpaceDialog.html",
                controller: "dialogController",
                controllerAs: "modal",
                size: "lg"
            })
        }
    }

    export class ProfileDetailsController {

        //public profileDetail;

        //constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $routeParams: ng.route.IRouteParamsService) {
        //    this.profileDetail = profileDetails.filter((p) => p.id == $routeParams['id'])[0];
        //}

        //public editProfile() {
        //    this.$uibModal.open({
        //        templateUrl: "/ngApp/Dialogs/profileDetails.html",
        //        controller: "profileDetailsController",
        //        controllerAs: "modal",
        //        size: "sm"
        //    })
        //}
    }

    export class DialogController {

        public file;

        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private filepickerService, private $scope: ng.IScope) {

        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: '/image' },
                this.fileUploaded.bind(this),
                this.$uibModalInstance.close())
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }

        public submit() {
            this.$uibModalInstance.close();
            //something to submit info
        }

        public close() {
            this.$uibModalInstance.close();
        }

    }

    export class ExploreController {

        constructor() {

        }

    }

    export class AboutController {


    }

    // Registering the controllers with the main module.
    angular.module("MyApp").controller("homeController", HomeController);
    angular.module("MyApp").controller("profileController", ProfileController);
    angular.module("MyApp").controller("exploreController", ExploreController);
    angular.module("MyApp").controller("dialogController", DialogController);
    angular.module("MyApp").controller("aboutController", AboutController);
}

