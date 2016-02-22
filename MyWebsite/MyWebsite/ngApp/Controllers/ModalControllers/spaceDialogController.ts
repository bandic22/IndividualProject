namespace MyApp.Controllers {

    export class SpaceDialogController {

        public userSpace;

        constructor(private $location: ng.ILocationService, private filepickerService, private $scope: ng.IScope, private userService: MyApp.Services.UserService) {

        }

        public addNewSpace() {
            this.userService.editUserSpace(this.userSpace).then(() => {
                this.$location.path("/profile/myprofile");
            });
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}