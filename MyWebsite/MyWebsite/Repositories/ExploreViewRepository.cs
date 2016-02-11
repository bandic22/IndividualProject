using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MyWebsite.Repositories
{
    public class ExploreViewRepository : IExploreViewRepository
    {
        private IGenericRepository _repo;

        public ExploreViewRepository(IGenericRepository repo)
        {
            _repo = repo;
        }

        public RequestViewModel GetRequestInfo(int requestId)
        {
            var request = _repo.Query<Request>().Where(r => r.Id == requestId).Include(u => u.User).FirstOrDefault();
            var replies = _repo.Query<Reply>().Where(re => re.RequestId == requestId).Include(u => u.User).ToList();

            var requestViewModel = new RequestViewModel
            {
                Replies = replies,
                Request = request,
            };

            return requestViewModel;
        }

        public void deleteReply (int id)
        {
            _repo.Delete<Reply>(id);
            _repo.SaveChanges();
        }

        public void addReply(Reply reply)
        {
            if(reply.Id != 0)
            {
                var original = reply;
                original.UserId = reply.UserId;
                original.User = reply.User;
                original.RequestId = reply.RequestId;
                original.Request = reply.Request;
                original.Message = reply.Message;
                original.IsHidden = true;
                original.Id = reply.Id;
                _repo.Add<Reply>(original);
                _repo.SaveChanges();
            }
            else
            {
                _repo.Add<Reply>(reply);
                _repo.SaveChanges();
            }
        }        
    }
}