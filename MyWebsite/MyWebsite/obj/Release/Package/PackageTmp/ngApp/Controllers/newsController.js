var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var NewsController = (function () {
            function NewsController($state) {
                this.$state = $state;
            }
            return NewsController;
        })();
        Controllers.NewsController = NewsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=newsController.js.map