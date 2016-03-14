using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using MyWebsite.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Repositories
{
    public class CategoryViewRepository : ICategoryViewRepository
    {
        private IGenericRepository _repo;

        public CategoryViewRepository(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public List<Category> GetRequestCategories()
        {
            return _repo.Query<Category>().Where(c => c.Type == "Request").ToList();
        }

        public List<Category> GetGearCategories()
        {
            return _repo.Query<Category>().Where(c => c.Type == "Gear").ToList();
        }

        public RequestsFilterViewModel GetFilteredRequestView(RequestFilterViewModel vm)
        {
            var reqCatRequests = _repo.Query<Request>().Where(r => r.Category.Id == vm.ReqCategoryId).Include(r => r.Replies).ToList();           
            var gearCatRequests = _repo.Query<Request>().Where(r => r.Category.Id == vm.GearCategoryId).Include(r => r.Replies).ToList();
            var gearSubCatRequests = _repo.Query<Request>().Where(r => r.CategoryId == vm.GearSubCategoryId).Include(r => r.Replies).Select(r => r.Category).Include(r => r.SubCategories).ToList();
            var subCategories = _repo.Query<SubCategory>().Where(s => s.Id == vm.GearSubCategoryId).ToList();
            ////////////////// Figure this out ///////////////////

            var requestsFiltered = new List<Request>();

            if (vm.ReqCategoryId != 0)
            {
                if (vm.GearCategoryId != 0)
                {
                    if (vm.GearSubCategoryId != 0)
                    {
                        requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearCatRequests).Intersect(gearSubCatRequests).ToList();
                    }
                    else
                    {
                        requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearCatRequests).ToList();
                    }
                }
                else if (vm.GearSubCategoryId != 0)
                {
                    requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearSubCatRequests).ToList();
                }
                else
                {
                    requestsFiltered = reqCatRequests;
                }
            }
            else if (vm.GearCategoryId != 0)
            {
                if (vm.ReqCategoryId != 0)
                {
                    if (vm.GearSubCategoryId != 0)
                    {
                        requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearCatRequests).Intersect(gearSubCatRequests).ToList();
                    }
                    else
                    {
                        requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearCatRequests).ToList();
                    }
                }
                else if (vm.GearSubCategoryId != 0)
                {
                    requestsFiltered = reqCatRequests.Intersect(gearCatRequests).Intersect(gearSubCatRequests).ToList();
                }
                else
                {
                    requestsFiltered = gearCatRequests;
                }
            }
            else if (vm.GearSubCategoryId != 0)
            {
                if (vm.GearCategoryId != 0)
                {
                    if (vm.ReqCategoryId != 0)
                    {
                        requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearCatRequests).Intersect(gearSubCatRequests).ToList();
                    }
                    else
                    {
                        requestsFiltered = reqCatRequests.Intersect(gearSubCatRequests).Intersect(gearCatRequests).ToList();
                    }
                }
                else if (vm.ReqCategoryId != 0)
                {
                    requestsFiltered = reqCatRequests.Intersect(reqCatRequests).Intersect(gearSubCatRequests).ToList();
                }
                else
                {
                    requestsFiltered = gearSubCatRequests;
                }
            }

            var requestsFilteredDto = MapUtility.Map<List<Request>, List<RequestDto>>(requestsFiltered);

            var requestViewModel = new RequestsFilterViewModel
            {
                Requests = requestsFilteredDto,
            };

            return requestViewModel;
        }

        public RequestsFilterViewModel GetFilteredRequests (RequestFilterViewModel vm)
        {

        }
    }
}