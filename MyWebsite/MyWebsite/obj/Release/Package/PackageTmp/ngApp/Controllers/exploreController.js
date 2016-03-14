var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ExploreController = (function () {
            function ExploreController(exploreService) {
                var _this = this;
                this.exploreService = exploreService;
                this.sortType = 'noOfReplies';
                this.sortReverse = false;
                this.currentPage = 1;
                this.maxSize = 5;
                this.itemsPerPage = 5;
                this.requests = this.exploreService.getRequests().then(function (result) {
                    _this.totalItems = result.length;
                    _this.requests = result;
                });
            }
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=exploreController.js.map