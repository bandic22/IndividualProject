namespace MyApp.Controllers {

    export class HomeController {

        public isLoggedIn;

        constructor(private $scope: ng.IScope, private $uibModal: ng.ui.bootstrap.IModalService, private accountService: MyApp.Services.AccountService, private profileService: MyApp.Services.ProfileService) {
            this.isLoggedIn = accountService.isLoggedIn();
        }

        public signUp() {

            this.$uibModal.open({
                templateUrl: "/ngApp/Dialogs/signUpDialog.html",
                controller: MyApp.Controllers.RegisterController,
                controllerAs: "register",
                size: "md"
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
    angular.module("MyApp").controller("HomeController", HomeController); //why could I declare multiple controllers on the index page only when "HomeController" had a captial H
}