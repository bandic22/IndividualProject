namespace MyApp.Controllers {

    export class EditGearController {

        public gearItem;
        public file;

        constructor(private userService: MyApp.Services.UserService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, private $routeParams: ng.route.IRouteParamsService) {
            this.gearItem = this.userService.getUserGear($routeParams['id']);
        }

        public editGear() {
            this.userService.addUserGear(this.gearItem).then(() => {
                this.$location.path("/profile/myprofile");
            });
        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'audio/*' },
                this.fileUploaded.bind(this)
            )
        }

        public fileUploaded(file) {
            // save file url to database            
            this.file = file;
            this.gearItem.fileUrl = this.file.url;
            console.log(this.gearItem);

            this.$scope.$apply(); // force page to update            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}