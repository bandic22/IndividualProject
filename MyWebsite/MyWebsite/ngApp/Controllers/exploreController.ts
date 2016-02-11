namespace MyApp.Controllers {

    export class ExploreController {
        
        public requests;
        public replies;
        public sortType = 'title';
        public sortReverse = false;

        public totalItems;
        public currentPage = 1;
        public maxSize = 5;

        public bigTotalItems = 200;
        public bigCurrentPage = 1;

        constructor(private exploreService: MyApp.Services.ExploreService) {
            
            this.requests = exploreService.getRequests();

        }     
    }
}