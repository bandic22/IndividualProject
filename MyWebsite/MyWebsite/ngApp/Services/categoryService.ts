namespace MyApp.Services {

    export class CategoryService {

        public categoryResource;

        constructor($resource: ng.resource.IResourceService) {
            this.categoryResource = $resource("/api/categories/:id", null, {
                getRequestCategories: {
                    method: "GET",
                    url: "/api/categories/getRequestCategories",
                    isArray: true
                },
                getGearCategories: {
                    method: "GET",
                    url: "/api/categories/getGearCategories",
                    isArray: true
                },
                getFilteredRequests: {
                    method: "GET",
                    url: "/api/categories/getFilteredRequests",
                    isArray: true
                }
            });
        }

        public filterRequests(requestCategoryId: number, gearCategoryId: number, gearSubCategoryId) {
            let vm: any = {};
            vm.categoryId = requestCategoryId;
            vm.subCategoryId = gearCategoryId;
            vm.gearSubCategoryId = gearSubCategoryId;
            return this.categoryResource.getFilteredRequests(vm).$promise;
        }

        public getRequestCategories() {
            return this.categoryResource.getRequestCategories().$promise;
        }

        public getGearCategories() {
            return this.categoryResource.getGearCategories().$promise;
        }
    }
}

angular.module("MyApp").service("categoryService", MyApp.Services.CategoryService);