namespace MyApp.Controllers {

    export class ReqDialogController {

        public request;
        public file;

        constructor(private userService: MyApp.Services.UserService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private filepickerService, private $scope: ng.IScope) {
            this.request = {};
            this.file = {};
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
            this.file = file;
            this.request.fileUrl = this.file.url;
            console.log(this.request);
 
            this.$scope.$apply(); // force page to update            
        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }  
    angular.module("MyApp").controller("reqDialogController", ReqDialogController);   
}


