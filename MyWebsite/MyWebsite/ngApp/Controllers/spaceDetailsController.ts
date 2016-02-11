namespace MyApp.Controllers {

    export class SpaceDetailsController {

        public userSpace;

        constructor(private userService: MyApp.Services.UserService, $routeParams: ng.route.IRouteParamsService) {
            this.userSpace = this.userService.getUserSpace($routeParams['id']);
        }
    }
}