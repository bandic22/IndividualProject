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

    // Controller for userGear CRUD
    public class UserGearController : ApiController
    {
        private IGenericRepository _repo;

        public UserGearController(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<GearItem>().ToList());
        }

        public IHttpActionResult Get(int id)
        {
            return Ok(_repo.Find<GearItem>(id));
        }

        [Authorize]
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
                else
                {
                    var original = _repo.Find<GearItem>(gearItem.Id);
                    original.Title = gearItem.Title;
                    original.Description = gearItem.Description;
                    _repo.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<GearItem>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}

