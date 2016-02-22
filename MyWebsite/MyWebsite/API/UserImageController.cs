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
    public class ImagesController : ApiController
    {
        private IGenericRepository _repo;

        public ImagesController(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IHttpActionResult Post(Image image)
        {
            if (ModelState.IsValid)
            {
                if(image.Id == 0)
                {
                    var userId = this.User.Identity.GetUserId();
                    image.UserId = userId;
                    _repo.Add(image);
                    _repo.SaveChanges();
                    return Ok();
                }

                else
                {
                    var original = _repo.Find<Image>(image.Id);
                    original.Caption = image.Caption;
                    original.FileUrl = image.FileUrl;
                    original.Id = image.Id;
                    original.UserId = image.UserId;
                    _repo.SaveChanges();
                    return Ok(original);
                }
            }
            return BadRequest();          
        }

        public IHttpActionResult Get(int id)
        {           
            return Ok(_repo.Find<Image>(id));
        }

        public IHttpActionResult Get()
        {
            return Ok(_repo.Query<Image>().ToList());
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete<Image>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}
