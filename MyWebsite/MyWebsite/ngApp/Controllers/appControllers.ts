namespace MyApp.Controllers {  

    export class HomeController {

        private firstName: string;
        private lastName: string;
        private dateOfBirth;
        private userName: string;
        private emailAddress: string;
        private password: string;
        public newUser: {};
        public homeGreeting;

        constructor(private $location: ng.ILocationService) {
            this.homeGreeting = "Welcome to the Home Page!";
        }

        createUser() {
            this.newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                dateOfBirth: this.dateOfBirth,
                userName: this.userName,
                emailAddress: this.emailAddress,
                password: this.password
            }
            this.$location.path("/profile");
        }
    }

    export class ProfileController {
        public profileGreeting;
        constructor() {
            this.profileGreeting = "Welcome to the Profile Page!";
        }
    }

    export class ExploreController {
        public exploreGreeting;
        constructor() {
            this.exploreGreeting = "Welcome to the Explore Page!";
        }
    }
}

