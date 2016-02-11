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
    // Controller for userSpace CRUD
    public class UserSpaceController : ApiController
    {
        private IGenericRepository _repo;

        public UserSpaceController(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<UserSpace>().ToList());
        }

        public IHttpActionResult Get(int id)
        {
            return Ok(_repo.Find<UserSpace>(id));
        }

        public IHttpActionResult Post(UserSpace userSpace)
        {
            if (ModelState.IsValid)
            {
                if (userSpace.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    userSpace.UserId = userId;
                    _repo.Add<UserSpace>(userSpace);
                    _repo.SaveChanges();
                    return Ok();
                }
                else
                {
                    var original = _repo.Find<UserSpace>(userSpace.Id);
                    original.Title = userSpace.Title;
                    original.Description = userSpace.Description;
                    original.FileUrl = userSpace.FileUrl;
                    _repo.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<UserSpace>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}

