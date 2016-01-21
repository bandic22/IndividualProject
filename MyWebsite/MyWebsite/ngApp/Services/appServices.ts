namespace MyApp.Services {

    export class UserService {

        private newUser;
        private firstName: string;
        private lastName: string;
        private dateOfBirth;
        private userName: string;
        private emailAddress: string;
        private password: string;

        constructor() {
            

        }

        public getUser() {
            this.newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                dateOfBirth: this.dateOfBirth,
                userName: this.userName,
                emailAddress: this.emailAddress,
                password: this.password
            }
        }       
    }


    angular.module("MyApp").service('userService', UserService);
   
}

