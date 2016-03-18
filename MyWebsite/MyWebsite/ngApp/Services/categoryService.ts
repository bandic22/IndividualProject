namespace MyApp.Services {

    export class CategoryService {

        public categoryResource;

        constructor($resource: ng.resource.IResourceService) {
            this.categoryResource = $resource("/api/category/:id", null, {
                getRequestCategories: {
                    method: "GET",
                    url: "/api/category/getRequestCategories",
                    isArray: true
                },
                getGearCategories: {
                    method: "GET",
                    url: "/api/category/getGearCategories",
                    isArray: true
                },
                getFilteredRequests: {
                    method: "POST",
                    url: "/api/category/getFilteredRequests",
                    isArray: true
                }
            });
        }

        public filterRequests(categoriesToFilterBy) {

            let vm: any = {
                CategoryIds: categoriesToFilterBy
            };

            return this.categoryResource.getFilteredRequests(vm).$promise;
        }

        public getRequestCategories() {
            return this.categoryResource.getRequestCategories().$promise;
        }

        public getGearCategories() {
            return this.categoryResource.getGearCategories();
        }
    }
}

angular.module("MyApp").service("categoryService", MyApp.Services.CategoryService);