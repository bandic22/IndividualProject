using Microsoft.AspNet.Identity;
using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using MyWebsite.Repositories;
using MyWebsite.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyWebsite.Controllers
{

    // Controller for userRequests CRUD
    public class RequestsController : ApiController
    {
        private IGenericRepository _repo;

        public RequestsController(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IHttpActionResult Get()
        {
            var request = _repo.Query<Request>().Include(r => r.User).ToList(); //skips the view model, now uses the automapper
            var data = MapUtility.Map<List<Request>, List<RequestDto>>(request);
            return Ok(data);
        }

        public IHttpActionResult Get(int id)
        {
            return Ok(_repo.Find<Request>(id));
        }

        public IHttpActionResult Post(Request request)
        {
            if (ModelState.IsValid)
            {
                if (request.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    
                    request.UserId = userId;
                    request.DateCreated = DateTime.Now;
                    _repo.Add<Request>(request);
                    _repo.SaveChanges();
                    return Ok();
                }
                else
                {
                    var original = _repo.Find<Request>(request.Id);
                    original.Title = request.Title;
                    original.Description = request.Description;
                    original.FileUrl = request.FileUrl;
                    original.NoOfReplies = request.NoOfReplies;
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
