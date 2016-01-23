namespace MyApp.Controllers {

    export class ReqDialogController {

        public file;
        public request;

        constructor(private mainService: MyApp.Services.MainService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private filepickerService, private $scope: ng.IScope) {

        }

        public addRequest() {

            this.$uibModalInstance.close();
            return this.mainService.addRequest(this.request);           
        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: '/image' },
                this.fileUploaded.bind(this),
                this.$uibModalInstance.close())
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }

        public cancel() {
            this.$uibModalInstance.close();
        }
    }  
    angular.module("MyApp").controller("reqDialogController", ReqDialogController);   
}


