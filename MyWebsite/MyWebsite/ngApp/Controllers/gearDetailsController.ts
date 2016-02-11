namespace MyApp.Controllers {

    export class GearDetailsController {

        public gearItem;

        constructor(private userService: MyApp.Services.UserService, $routeParams: ng.route.IRouteParamsService) {
            this.gearItem = this.userService.getUserGear($routeParams['id']);
        }
    }
}