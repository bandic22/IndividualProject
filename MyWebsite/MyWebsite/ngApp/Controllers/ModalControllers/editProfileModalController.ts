namespace MyApp.Controllers {

    export class EditProfileModalController {

        public user;

        constructor(private userService: MyApp.Services.UserService, private $location: ng.ILocationService) {

        }

        public cancel() {
            this.$location.path("/profile");
        }
    }
}