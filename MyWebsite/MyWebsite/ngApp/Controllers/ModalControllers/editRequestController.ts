namespace MyApp.Controllers {

    export class EditRequestController {

        public request;
        public file;
        public categories;

        constructor(private userService: MyApp.Services.UserService, private $stateParams: ng.ui.IStateParamsService, private filepickerService, private $location: ng.ILocationService, private $scope: ng.IScope, private categoryService: MyApp.Services.CategoryService) {
            this.categoryService.getRequestCategories().then((result) => {
                this.categories = result;
                this.userService.getUserRequest($stateParams['id']).then((result) => {
                    this.request = result;
                    this.checkCategories();
                });
            });                  
        }

        public addRequest() {
            let requestVm = {
                request: this.request,
                catRequests: []
            };
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
            this.userService.addUserRequest(requestVm).then(() => {
                this.$location.path("/profile/myprofile");
            });
        }

        public checkCategories() {
            debugger;
            for (let category of this.request.categories) {
                if (category.id == 1) {
                    $("#recording").prop('checked', true);
                }
                if (category.id == 2) {
                    $("#mixing").prop('checked', true);
                }
                if (category.id == 3) {
                    $("#mastering").prop('checked', true);
                }
                if (category.id == 4) {
                    $("#composition").prop('checked', true);
                }
            }
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