namespace MyApp.Controllers {

    export class EditSpaceController {

        public userSpace;

        constructor(private userService: MyApp.Services.UserService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, $routeParams: ng.route.IRouteParamsService) {
            this.userSpace = this.userService.getUserSpace($routeParams['id']);
        }

        public editSpace() {
            this.userService.editUserSpace(this.userSpace).then(() => {
                this.$scope.$apply();
            });            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}