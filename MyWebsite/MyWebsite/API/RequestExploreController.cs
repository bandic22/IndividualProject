using Microsoft.AspNet.Identity;
using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using MyWebsite.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyWebsite.API
{
    public class RequestExploreController : ApiController
    {
        private IExploreRequestsRepository _repo;

        public RequestExploreController(IExploreRequestsRepository repo)
        {
            this._repo = repo;
        }

        public RequestViewModel Get(int id)
        {
            return _repo.GetRequestInfo(id);
        }

        public IHttpActionResult Post(Reply reply)
        {
            if (ModelState.IsValid)
            {
                if (reply.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    reply.UserId = userId;
                    _repo.addReply(reply);
                    
                }
            }
            return BadRequest();
        }
    }
}

