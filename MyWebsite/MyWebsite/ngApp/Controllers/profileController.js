var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController(profileService, userService, $stateParams, $route, filepickerService, $location, $uibModal) {
                this.profileService = profileService;
                this.userService = userService;
                this.$stateParams = $stateParams;
                this.$route = $route;
                this.filepickerService = filepickerService;
                this.$location = $location;
                this.$uibModal = $uibModal;
                this.imageReady = false;
                this.showReplies = false;
                this.checkRouteParam();
                this.image = {
                    fileUrl: '',
                    caption: '',
                };
            }
            ProfileController.prototype.checkRouteParam = function () {
                if (this.$stateParams["displayName"] == "myprofile") {
                    this.userProfileInfo = this.getLoggedInUser();
                }
                else {
                    this.userProfileInfo = this.profileService.getUserInfoProfile(this.$stateParams["displayName"]);
                }
            };
            ProfileController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            ProfileController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.image.fileUrl = this.file.url;
                this.imageReady = true;
                this.addImage();
            };
            ProfileController.prototype.addImage = function () {
                var _this = this;
                this.userService.addImage(this.image).then(function () {
                    _this.imageReady = false;
                    _this.$route.reload();
                });
            };
            ProfileController.prototype.viewImage = function (image) {
                debugger;
                this.$uibModal.open({
                    templateUrl: "/ngApp/dialogs/imageModal.html",
                    controller: MyApp.Controllers.ImageModalController,
                    controllerAs: 'modal',
                    size: 'lg',
                    resolve: {
                        isAuthorized: this.userProfileInfo.isAuthorized,
                        image: function () { return image; },
                    }
                });
            };
            ProfileController.prototype.getLoggedInUser = function () {
                return this.profileService.getUserInfo();
            };
            ProfileController.prototype.editRequest = function (id) {
                var _this = this;
                return this.userService.getUserRequest(id).then(function () {
                    _this.$location.path('/profile/myprofile');
                });
            };
            ProfileController.prototype.editGear = function (id) {
                var _this = this;
                return this.userService.getUserGear(id).then(function () {
                    _this.$location.path('/profile/myprofile');
                });
            };
            ProfileController.prototype.editSpace = function (id) {
                var _this = this;
                return this.userService.getUserSpace(id).then(function () {
                    _this.$location.path('/profile/myprofile');
                });
            };
            ProfileController.prototype.deleteGear = function (id) {
                this.$uibModal.open({
                    templateUrl: "/ngApp/dialogs/deleteModal.html",
                    controller: MyApp.Controllers.DeleteController,
                    controllerAs: 'modal',
                    size: 'sm',
                    resolve: {
                        item: function () { return id; },
                        type: function () { return "gear"; }
                    }
                });
            };
            ProfileController.prototype.deleteRequest = function (id) {
                this.$uibModal.open({
                    templateUrl: "/ngApp/dialogs/deleteModal.html",
                    controller: MyApp.Controllers.DeleteController,
                    controllerAs: 'modal',
                    size: 'sm',
                    resolve: {
                        item: function () { return id; },
                        type: function () { return "request"; }
                    }
                });
            };
            ProfileController.prototype.deleteImage = function (id) {
                this.$uibModal.open({
                    templateUrl: "/ngApp/dialogs/deleteModal.html",
                    controller: MyApp.Controllers.DeleteController,
                    controllerAs: 'modal',
                    size: 'sm',
                    resolve: {
                        item: function () { return id; },
                        type: function () { return "image"; }
                    }
                });
            };
            return ProfileController;
        })();
        Controllers.ProfileController = ProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
