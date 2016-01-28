using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Repositories
{
    public class ExploreRequestsRepository : IExploreRequestsRepository
    {
        private IGenericRepository _repo;

        public ExploreRequestsRepository(IGenericRepository repo)
        {
            _repo = repo;
        }

        public RequestViewModel GetRequestInfo(int requestId)
        {
            var request = _repo.Query<Request>().Where(r => r.Id == requestId).FirstOrDefault();
            var replies = _repo.Query<Reply>().Where(re => re.Id == requestId).Include(u => u.User.UserName).ToList();

            var requestViewModel = new RequestViewModel
            {
                Replies = replies,
                Request = request,
            };

            return requestViewModel;
        }
    }
}