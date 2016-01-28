var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ReplyService = (function () {
            function ReplyService($resource) {
                this.requestResource = ("/api/requests/:id");
            }
            ReplyService.prototype.addReply = function (reply) {
                return this.requestResource.save(reply);
            };
            return ReplyService;
        })();
        Services.ReplyService = ReplyService;
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
