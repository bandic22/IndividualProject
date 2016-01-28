using Microsoft.AspNet.Identity;
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
    public class ProfileController : ApiController
    {
        private IProfileRepository _repo;

        public ProfileController(IProfileRepository repo)
        {
            this._repo = repo;
        }

        public UserViewModel Get()
        {   //returns the user info to the client service based on the identity of the one currently logged in.
            var userId = this.User.Identity.GetUserId();
            return _repo.GetUserInfo(userId);         
        }
    }
}
