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
        public categories;
        public categoriesToFilterBy: any = [];

        constructor(private exploreService: MyApp.Services.ExploreService, private categoryService: MyApp.Services.CategoryService) {
            this.categories = this.categoryService.getRequestCategories();
            this.requests = this.exploreService.getRequests().then((result) => {
                this.totalItems = result.length;
                this.requests = result;
            })
        }

        public getAllRequests() {
            this.requests = this.exploreService.getRequests().then((result) => {
                this.totalItems = result.length;
                this.requests = result;
            })
        }

        public getFilteredRequests() {
            debugger;
            let array = [];
            if ($("#recording").is(':checked')) {
                array.push($("#recording").val());
            }
            if ($("#mixing").is(':checked')) {
                array.push($("#mixing").val());
            }
            if ($("#mastering").is(':checked')) {
                array.push($("#mastering").val());
            }
            if ($("#composition").is(':checked')) {
                array.push($("#composition").val());
            }           
            this.categoriesToFilterBy = array;
            this.categoryService.filterRequests(this.categoriesToFilterBy).then((result) => {
                this.requests = result;
            });
        }
    }
}