namespace MyApp.Services {

    export class SignUpService {

        constructor(private $location: ng.ILocationService) {
            
        }

        createUser($location: ng.ILocationService) {
            
        }
    }
    
    export class HomeService {

        constructor() {


        }

        getUserLogin() {

        }
    }

    angular.module("MyApp").service("Services", SignUpService);
    angular.module("MyApp").service("Services", HomeService);
}

