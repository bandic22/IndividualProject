namespace MyApp.Controllers {

    export class GearDetailsController {

        public gearItem;

        constructor(private userService: MyApp.Services.UserService, $stateParams: ng.ui.IStateParamsService) {
            this.gearItem = this.userService.getUserGear($stateParams['id']);
        }
    }
}