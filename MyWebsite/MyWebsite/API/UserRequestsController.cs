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
            var requests = _repo.Query<Request>().Include(r => r.User).Include(r => r.Categories).ToList(); //skips the view model, now uses the automapper
            var requestsDto = MapUtility.Map<List<Request>, List<RequestDto>>(requests);
            foreach (var request in requestsDto)
            {
                request.DateCreated = request.DateCreated.ToLocalTime();
            }
            return Ok(requestsDto);
        }

        public IHttpActionResult Get(int id)
        {
            var request = _repo.Query<Request>().Where(r => r.Id == id).Include(r => r.Categories).FirstOrDefault();
            request.DateCreated = request.DateCreated.ToLocalTime();
            return Ok(request);
        }

        public IHttpActionResult Post(AddRequestViewModel requestVm)
        {
            if (ModelState.IsValid)
            {
                if (requestVm.Request.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    var requestCategories = new List<Category>();
                    var catRequests = new List<CatRequest>();
                    var request = requestVm.Request;

                    foreach (var category in requestVm.CatRequests)
                    {
                        var foundCat = _repo.Find<Category>(category.CategoryId);
                        var catRequest = new CatRequest {
                            CategoryId = category.CategoryId,
                            RequestId = request.Id
                        };
                        _repo.Add<CatRequest>(catRequest);
                        requestCategories.Add(foundCat);
                    }

                    request.UserId = userId;
                    request.DateCreated = DateTime.UtcNow;
                    request.Categories = requestCategories;
                    _repo.Add<Request>(request);
                    _repo.SaveChanges();
                    return Ok();
                }
                else
                {
                    var requestCategories = new List<Category>();
                    var catRequests = new List<CatRequest>();
                    var request = requestVm.Request;

                    foreach (var category in requestVm.CatRequests)
                    {
                        var foundCat = _repo.Find<Category>(category.CategoryId);
                        var catRequest = new CatRequest
                        {
                            CategoryId = category.CategoryId,
                            RequestId = request.Id
                        };
                        _repo.Add<CatRequest>(catRequest);
                        requestCategories.Add(foundCat);
                    }

                    var original = _repo.Query<Request>().Where(r => r.Id == requestVm.Request.Id).Include(r => r.Categories).FirstOrDefault();
                    original.Title = requestVm.Request.Title;
                    original.Description = requestVm.Request.Description;
                    original.FileUrl = requestVm.Request.FileUrl;
                    original.NoOfReplies = requestVm.Request.NoOfReplies;
                    original.Categories = requestCategories;
                    _repo.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<Request>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}
