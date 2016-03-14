var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CategoryService = (function () {
            function CategoryService($resource) {
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
            CategoryService.prototype.filterRequests = function (requestCategoryId, gearCategoryId, gearSubCategoryId) {
                var vm = {};
                vm.categoryId = requestCategoryId;
                vm.subCategoryId = gearCategoryId;
                vm.gearSubCategoryId = gearSubCategoryId;
                return this.categoryResource.getFilteredRequests(vm).$promise;
            };
            CategoryService.prototype.getRequestCategories = function () {
                return this.categoryResource.getRequestCategories().$promise;
            };
            CategoryService.prototype.getGearCategories = function () {
                return this.categoryResource.getGearCategories().$promise;
            };
            return CategoryService;
        })();
        Services.CategoryService = CategoryService;
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
angular.module("MyApp").service("categoryService", MyApp.Services.CategoryService);
