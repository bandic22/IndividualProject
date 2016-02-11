namespace MyApp.Controllers {

    export class EditSpaceController {

        public userSpace;
        public file;

        constructor(private userService: MyApp.Services.UserService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, $routeParams: ng.route.IRouteParamsService) {
            this.userSpace = this.userService.getUserSpace($routeParams['id']);
        }

        public editSpace() {
            this.userService.editUserSpace(this.userSpace).then(() => {
                this.$location.path("/profile/myprofile");
            });
        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            )
        }


        public fileUploaded(file) {
            // save file url to database            
            this.file = file;
            this.userSpace.fileUrl = this.file.url;
            console.log(this.userSpace);

            this.$scope.$apply(); // force page to update            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}