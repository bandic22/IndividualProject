var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($location) {
                this.$location = $location;
                this.homeGreeting = "Welcome to the Home Page!";
            }
            HomeController.prototype.createUser = function () {
                this.newUser = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    dateOfBirth: this.dateOfBirth,
                    userName: this.userName,
                    emailAddress: this.emailAddress,
                    password: this.password
                };
                this.$location.path("/profile");
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var ProfileController = (function () {
            function ProfileController() {
                this.profileGreeting = "Welcome to the Profile Page!";
            }
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
        var ExploreController = (function () {
            function ExploreController() {
                this.exploreGreeting = "Welcome to the Explore Page!";
            }
            return ExploreController;
        })();
        Controllers.ExploreController = ExploreController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appControllers.js.map