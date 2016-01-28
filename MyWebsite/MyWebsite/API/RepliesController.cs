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
    public class RepliesController : ApiController
    {
        private IGenericRepository _repo;

        public RepliesController(IGenericRepository repo)
        {
            _repo = repo;
        }

        // fetches all requests from DB
        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<Reply>().ToList());
        }

        // fetches one request from DB by the ID
        public IHttpActionResult Get(int id)
        {
            return Ok(_repo.Find<Reply>(id));
        }

        // checks the model state, if valid and if request id == 0, it's new, so create new DB entry and return it
        public IHttpActionResult Post(Reply reply)
        {
            if (ModelState.IsValid)
            {
                if(reply.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    reply.UserId = userId;
                    _repo.Add<Reply>(reply);
                    _repo.SaveChanges();
                    return Ok();
                }               
            }
            return BadRequest();         
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<Reply>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}
