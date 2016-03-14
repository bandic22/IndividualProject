namespace MyApp.Services {

    export class AdminService {

        private adminResource;

        constructor($resource: angular.resource.IResourceService) {
            this.adminResource = $resource("/api/adminView/");
        }

         public getAdminResource() {
            return this.adminResource.get().$promise;
        }
    }
    angular.module("MyApp").service("adminService", AdminService);
}