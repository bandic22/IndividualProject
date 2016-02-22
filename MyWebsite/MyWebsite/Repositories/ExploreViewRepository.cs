using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using MyWebsite.Utilities;
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
            var requestDto = MapUtility.Map<Request, RequestDto>(request);
            var replies = _repo.Query<Reply>().Where(re => re.RequestId == requestId).Include(u => u.User).Include(r => r.Ratings).ToList();
            var repliesDto = MapUtility.Map<List<Reply>, List<ReplyDto>>(replies);
            //var ratings = _repo.Query<Rating>().Where(r => r.ReplyId == ).Include(u => u.User).ToList();
            //var ratingsDto = MapUtility.Map<List<Rating>, List<RatingDto>>(ratings);

            var requestViewModel = new RequestViewModel
            {
                Replies = repliesDto,
                Request = requestDto,
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
                var original = _repo.Find<Reply>(reply.Id);
                original.IsHidden = true;
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