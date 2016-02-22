using Microsoft.AspNet.Identity;
using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using MyWebsite.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace MyWebsite.API
{
    // Brings in the RequestViewModel for the request details view
    public class RequestViewController : ApiController
    {
        private IExploreViewRepository _repo;

        public RequestViewController(IExploreViewRepository repo)
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
                    reply.DateCreated = DateTime.Now;
                    reply.IsHidden = false;
                    _repo.addReply(reply);
                    return Ok();               
                }
                else
                {
                    _repo.addReply(reply);
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            var user = User.Identity as ClaimsIdentity;
            if (!user.HasClaim("Admin", "true"))
            {
                return Unauthorized();
            }

            _repo.deleteReply(id);
            return Ok();
        }
    }
}

