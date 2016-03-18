var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CategoryService = (function () {
            function CategoryService($resource) {
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
            CategoryService.prototype.filterRequests = function (categoriesToFilterBy) {
                var vm = {
                    CategoryIds: categoriesToFilterBy
                };
                return this.categoryResource.getFilteredRequests(vm).$promise;
            };
            CategoryService.prototype.getRequestCategories = function () {
                return this.categoryResource.getRequestCategories().$promise;
            };
            CategoryService.prototype.getGearCategories = function () {
                return this.categoryResource.getGearCategories();
            };
            return CategoryService;
        })();
        Services.CategoryService = CategoryService;
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
angular.module("MyApp").service("categoryService", MyApp.Services.CategoryService);
//# sourceMappingURL=categoryService.js.map