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

namespace MyWebsite.Controllers
{
    public class RequestsController : ApiController
    {
        private IGenericRepository _repo;

        public RequestsController(IGenericRepository repo)
        {
            _repo = repo;
        }

        // fetches all requests from DB
        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<Request>().ToList());
        }

        // fetches one request from DB by the ID
        public IHttpActionResult Get(int id)
        {
            return Ok(_repo.Find<Request>(id));
        }

        // checks the model state, if valid and if request id == 0, it's new, so create new DB entry and return it
        public IHttpActionResult Post(Request request)
        {
            if(ModelState.IsValid)
            {
                if(request.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    request.UserId = userId;
                    _repo.Add<Request>(request);
                    _repo.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();           
        }
     
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<Request>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}
