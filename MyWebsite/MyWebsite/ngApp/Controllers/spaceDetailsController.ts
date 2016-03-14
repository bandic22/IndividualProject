namespace MyApp.Controllers {

    export class SpaceDetailsController {

        public userSpace;

        constructor(private userService: MyApp.Services.UserService, $stateParams: ng.ui.IStateParamsService) {
            this.userSpace = this.userService.getUserSpace($stateParams['id']);
        }
    }
}