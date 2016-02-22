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
using System.Security.Principal;
using System.Web.Http;

namespace MyWebsite.API
{
    //brings in the UserViewModel for the profile view
    public class ProfileViewController : ApiController
    {
        private IProfileViewRepository _repo;
        private IGenericRepository _repo2;

        public ProfileViewController(IProfileViewRepository repo, IGenericRepository repo2)
        {
            this._repo = repo;
            this._repo2 = repo2;
        }

        public UserViewModel Get()
        {   //returns the user info to the client service based on the identity of the one currently logged in.
            var userId = this.User.Identity.GetUserId();
            return _repo.GetUserInfo(userId);         
        }

        public UserViewModel Get(string displayName)
        {
            var userProfileId = _repo.UserId(displayName);
            return _repo.GetUserInfo(userProfileId);
        }

        [HttpGet]
        [Route("api/profileView/findCurrentUser")]
        public IHttpActionResult FindCurrentUser()
        {
            var userId = User.Identity.GetUserId();
            var user = _repo2.Find<ApplicationUser>(userId);
            var userToSend = MapUtility.Map<ApplicationUser, ApplicationUserDto>(user);

            return Ok(userToSend);
        }
    }
}
