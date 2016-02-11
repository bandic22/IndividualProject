var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ExploreController = (function () {
            function ExploreController(exploreService) {
                this.exploreService = exploreService;
                this.sortType = 'title';
                this.sortReverse = false;
                this.currentPage = 1;
                this.maxSize = 5;
                this.bigTotalItems = 200;
                this.bigCurrentPage = 1;
                this.requests = exploreService.getRequests();
            }
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
