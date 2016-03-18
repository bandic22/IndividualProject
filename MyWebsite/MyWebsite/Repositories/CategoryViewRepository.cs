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

        public List<CategoryDto> GetRequestCategories()
        {
            var categories = _repo.Query<Category>().Where(c => c.Type == "Request").ToList();
            var categoriesDto = MapUtility.Map<List<Category>, List<CategoryDto>>(categories);
            return categoriesDto;
        }

        public List<Category> GetGearCategories()
        {
            return _repo.Query<Category>().Where(c => c.Type == "Gear").ToList();
        }

        public List<Request> SearchByCategories(RequestFilterViewModel vm)
        {
            var requests = new List<Request>();
            var allRequests = _repo.Query<Request>().Include(r => r.Categories).ToList();
            MapUtility.Map<List<Request>, List<RequestDto>>(allRequests);

            foreach (var id in vm.CategoryIds)
            {
                var x = _repo.Query<CatRequest>().Where(c => c.CategoryId == id).Select(r => r.Request).Include(r => r.User).ToList();
                foreach (var req in x)
                {
                    if (requests.Contains(req) == false)
                    {
                        requests.Add(req);
                    }
                }
            }
            return requests;
        }
    }
}




            //for (var i = 0; i < vm.CategoryIds.Count; i++)
            //{
            //    var results = _repo.Query<Category>().Where(c => c.Id == vm.CategoryIds[i]).Include(c => c.Requests).ToList();

            //    for (var j = 0; j < results.Count; j++)
            //    {
            //        if (requests.Contains(results[j].Requests) == false)
            //        {
            //            requests.Add(results.Requests[j]);
            //        }
            //    }
            //}
            //return requests;
        //}

//        public RequestsFilterViewModel GetFilteredRequestView(RequestFilterViewModel vm)
//        {
//            var recordingRequests = _repo.Query<Request>().Where(r => r.CategoryId == vm.Recording).Include(r => r.Replies).ToList();
//            var mixingRequests = _repo.Query<Request>().Where(r => r.CategoryId == vm.Mixing).Include(r => r.Replies).ToList();
//            var masteringRequests = _repo.Query<Request>().Where(r => r.CategoryId == vm.Mastering).Include(r => r.Replies).ToList();
//            var compositionRequests = _repo.Query<Request>().Where(r => r.CategoryId == vm.Composition).Include(r => r.Replies).ToList();
//            var allRequests = _repo.Query<Request>().ToList();
//            ////////////////// Figure this out ///////////////////

//            var requestsFiltered = new List<Request>();







//            if (vm.Recording != 0)
//            {
//                if (vm.Mixing != 0)
//                {
//                    if (vm.Mastering != 0)
//                    {
//                        requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(mixingRequests).Intersect(masteringRequests).ToList();
//                    }
//                    else
//                    {
//                        requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(mixingRequests).ToList();
//                    }
//                }
//                else if (vm.Mastering != 0)
//                {
//                    requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(masteringRequests).ToList();
//                }
//                else
//                {
//                    requestsFiltered = recordingRequests;
//                }
//            }
//            else if (vm.Mixing != 0)
//            {
//                if (vm.Recording != 0)
//                {
//                    if (vm.Mastering != 0)
//                    {
//                        requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(mixingRequests).Intersect(masteringRequests).ToList();
//                    }
//                    else
//                    {
//                        requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(mixingRequests).ToList();
//                    }
//                }
//                else if (vm.Mastering != 0)
//                {
//                    requestsFiltered = recordingRequests.Intersect(mixingRequests).Intersect(masteringRequests).ToList();
//                }
//                else
//                {
//                    requestsFiltered = mixingRequests;
//                }
//            }
//            else if (vm.Mastering != 0)
//            {
//                if (vm.Mixing != 0)
//                {
//                    if (vm.Recording != 0)
//                    {
//                        requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(mixingRequests).Intersect(masteringRequests).ToList();
//                    }
//                    else
//                    {
//                        requestsFiltered = recordingRequests.Intersect(masteringRequests).Intersect(mixingRequests).ToList();
//                    }
//                }
//                else if (vm.Recording != 0)
//                {
//                    requestsFiltered = recordingRequests.Intersect(recordingRequests).Intersect(masteringRequests).ToList();
//                }
//                else
//                {
//                    requestsFiltered = masteringRequests;
//                }
//            }

//            var requestsFilteredDto = MapUtility.Map<List<Request>, List<RequestDto>>(requestsFiltered);

//            var requestViewModel = new RequestsFilterViewModel
//            {
//                Requests = requestsFilteredDto,
//            };

//            return requestViewModel;
//        }
//    }
//}