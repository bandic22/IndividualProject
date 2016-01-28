namespace MyApp.Controllers {

    export class ReqDialogController {

        public request;

        constructor(private userService: MyApp.Services.UserService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private filepickerService, private $scope: ng.IScope) {

        }

        public addRequest() {
            this.userService.addUserRequest(this.request).then(() => {            
                this.$uibModalInstance.close();
                  
            });                 
        }

        public editRequest() {



        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'audio/*' },
                this.fileUploaded.bind(this),
                this.$uibModalInstance.close()
            )                
        }

        public fileUploaded(file) {
            // save file url to database
            this.request.fileUrl = file; 
            this.$scope.$apply(); // force page to update            
        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }  
    angular.module("MyApp").controller("reqDialogController", ReqDialogController);   
}


