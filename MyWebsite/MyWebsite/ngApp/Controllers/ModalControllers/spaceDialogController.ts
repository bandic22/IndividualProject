namespace MyApp.Controllers {

    export class SpaceDialogController {

        public userSpace;
        public file;

        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private filepickerService, private $scope: ng.IScope, private userService: MyApp.Services.UserService) {

        }

        public addNewSpace() {
            return this.userService.addUserSpace(this.userSpace).then(() => {
                this.$uibModalInstance.close();
            });
        }

        public editSpace() {



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