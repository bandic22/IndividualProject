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
    public class UserGearController : ApiController
    {
        private IGenericRepository _repo;

        public UserGearController(IGenericRepository repo)
        {
            _repo = repo;
        }

        // fetches all requests from DB
        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<GearItem>().ToList());
        }

        // fetches one request from DB by the ID
        public IHttpActionResult Get(int id)
        {
            return Ok(_repo.Find<GearItem>(id));
        }

        // checks the model state, if valid and if request id == 0, it's new, so create new DB entry and return it
        public IHttpActionResult Post(GearItem gearItem)
        {
            if (ModelState.IsValid)
            {
                if (gearItem.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    gearItem.UserId = userId;
                    _repo.Add<GearItem>(gearItem);
                    _repo.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<GearItem>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}

