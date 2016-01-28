namespace MyApp.Controllers {

    export class HomeController {

        constructor(private $uibModal: ng.ui.bootstrap.IModalService) {


        }

        public signUp() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/signUpDialog.html",
                controller: MyApp.Controllers.RegisterController,
                controllerAs: "register",
                size: "sm"
            })
        }

        public login() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/loginDialog.html",
                controller: MyApp.Controllers.LoginController,
                controllerAs: "login",
                size: "sm"
            })
        }       
    }
    angular.module("MyApp").controller("homeController", HomeController);
}