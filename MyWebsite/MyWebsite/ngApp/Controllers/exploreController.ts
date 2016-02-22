namespace MyApp.Controllers {

    export class ExploreController {
        
        public requests;
        public replies;
        public sortType = 'noOfReplies';
        public sortReverse = false;

        public totalItems;
        public currentPage = 1;
        public maxSize = 5;
        public itemsPerPage = 5;

        constructor(private exploreService: MyApp.Services.ExploreService) {        
            let requests = this.exploreService.getRequests().then((result) => {
                this.totalItems = result.length;
                this.requests = result;
            });
        }
    }
}