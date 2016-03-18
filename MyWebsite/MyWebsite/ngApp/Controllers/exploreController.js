var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ExploreController = (function () {
            function ExploreController(exploreService, categoryService) {
                var _this = this;
                this.exploreService = exploreService;
                this.categoryService = categoryService;
                this.sortType = 'noOfReplies';
                this.sortReverse = false;
                this.currentPage = 1;
                this.maxSize = 5;
                this.itemsPerPage = 5;
                this.categoriesToFilterBy = [];
                this.categories = this.categoryService.getRequestCategories();
                this.requests = this.exploreService.getRequests().then(function (result) {
                    _this.totalItems = result.length;
                    _this.requests = result;
                });
            }
            ExploreController.prototype.getAllRequests = function () {
                var _this = this;
                this.requests = this.exploreService.getRequests().then(function (result) {
                    _this.totalItems = result.length;
                    _this.requests = result;
                });
            };
            ExploreController.prototype.getFilteredRequests = function () {
                var _this = this;
                debugger;
                var array = [];
                if ($("#recording").is(':checked')) {
                    array.push($("#recording").val());
                }
                if ($("#mixing").is(':checked')) {
                    array.push($("#mixing").val());
                }
                if ($("#mastering").is(':checked')) {
                    array.push($("#mastering").val());
                }
                if ($("#composition").is(':checked')) {
                    array.push($("#composition").val());
                }
                this.categoriesToFilterBy = array;
                this.categoryService.filterRequests(this.categoriesToFilterBy).then(function (result) {
                    _this.requests = result;
                });
            };
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=exploreController.js.map