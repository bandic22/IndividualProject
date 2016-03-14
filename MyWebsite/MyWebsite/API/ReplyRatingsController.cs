using Microsoft.AspNet.Identity;
using MyWebsite.Models;
using MyWebsite.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyWebsite.API
{
    [Authorize]
    public class ReplyRatingsController : ApiController
    {
        IGenericRepository _repo;

        public ReplyRatingsController(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public IHttpActionResult Post(Rating rating)
        {
            if (ModelState.IsValid)
            {
                if (rating.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    rating.UserId = userId;
                    var reply = _repo.Find<Reply>(rating.ReplyId);

                    if(rating.IsApproval == true)
                    {
                        reply.NoOfLikes++;
                        _repo.SaveChanges();
                    }
                    else if(rating.IsApproval == false)
                    {
                        reply.NoOfDislikes++;
                        _repo.SaveChanges();
                    }
                    _repo.Add<Rating>(rating);
                    _repo.SaveChanges();
                    return Ok();
                }
                return BadRequest();
            }

            return BadRequest();
        }

        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<Rating>().ToList());
        }
    }
}
