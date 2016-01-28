﻿namespace MyApp.Controllers {

    export class ReqDialogController {

        public file;

        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private filepickerService, private $scope: ng.IScope) {

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

}

