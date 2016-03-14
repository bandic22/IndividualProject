namespace MyApp.Controllers {

    export class EditSpaceController {

        public userSpace;

        constructor(private userService: MyApp.Services.UserService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, $stateParams: ng.ui.IStateParamsService) {
            this.userSpace = this.userService.getUserSpace($stateParams['id']);
        }

        public editSpace() {
            this.userService.editUserSpace(this.userSpace).then(() => {
                this.$location.path("/profile/myprofile");
            });            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}