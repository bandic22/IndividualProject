namespace MyApp.Controllers {

    export class EditRequestController {

        public request;
        public file;
        public categories;

        constructor(private userService: MyApp.Services.UserService, private $stateParams: ng.ui.IStateParamsService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, private categoryService: MyApp.Services.CategoryService) {
            this.request = this.userService.getUserRequest($stateParams['id']);
            this.categories = this.categoryService.getRequestCategories();
        }

        public addRequest() {
            this.userService.addUserRequest(this.request).then(() => {
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
            this.request.fileUrl = this.file.url;
            console.log(this.request);

            this.$scope.$apply(); // force page to update            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}