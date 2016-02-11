namespace MyApp.Controllers {

    export class ReqDialogController {

        public request;
        public file;

        constructor(private userService: MyApp.Services.UserService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope) {
            
        }

        public addRequest() {
            this.userService.addUserRequest(this.request).then(() => {
                this.$location.path("/profile/myprofile");
                window.location.reload();
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
            this.request.fileUrl = this.file.url;
            console.log(this.request);

            this.$scope.$apply(); // force page to update            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}