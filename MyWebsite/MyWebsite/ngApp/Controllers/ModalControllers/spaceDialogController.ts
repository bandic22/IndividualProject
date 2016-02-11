namespace MyApp.Controllers {

    export class SpaceDialogController {

        public userSpace;
        public file;

        constructor(private $location: ng.ILocationService, private filepickerService, private $scope: ng.IScope, private userService: MyApp.Services.UserService) {

        }

        public addNewSpace() {
            this.userService.editUserSpace(this.userSpace).then(() => {
                this.$location.path("/profile/myprofile");
            });
        }

        public editSpace() {



        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this),
                this.$location.path("/profile"));
        }

        public fileUploaded(file) {
            // save file url to database
            this.userSpace.fileUrl = this.file.url; // or this.file.url
            this.$scope.$apply(); // force page to update
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}