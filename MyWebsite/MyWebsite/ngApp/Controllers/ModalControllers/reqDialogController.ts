namespace MyApp.Controllers {

    export class ReqDialogController {

        public request;
        public file;
        public categories;

        constructor(private userService: MyApp.Services.UserService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, private categoryService: MyApp.Services.CategoryService) {            
            this.categoryService.getRequestCategories().then((result) => {
                this.categories = result;
            });
        }

        public addRequest() {
            let requestVm = {
                request: this.request,
                catRequests: []
            };
            debugger;
            if ($("#recording").is(':checked')) {
                let recording = {
                    requestId: this.request.id,
                    categoryId: this.categories[0].id
                }
                requestVm.catRequests.push(recording);
            }
            if ($("#mixing").is(':checked')) {
                let mixing = {
                    requestId: this.request.id,
                    categoryId: this.categories[1].id
                }
                requestVm.catRequests.push(mixing);
            }
            if ($("#mastering").is(':checked')) {
                let mastering = {
                    requestId: this.request.id,
                    categoryId: this.categories[2].id
                }
                requestVm.catRequests.push(mastering);
            }
            if ($("#composition").is(':checked')) {
                let composition = {
                    requestId: this.request.id,
                    categoryId: this.categories[3].id
                }
                requestVm.catRequests.push(composition);
            }
            return this.userService.addUserRequest(requestVm).then(() => {
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
            // force page to update            
        }

        public cancel() {
            this.$location.path("/profile/myprofile");
        }
    }
}