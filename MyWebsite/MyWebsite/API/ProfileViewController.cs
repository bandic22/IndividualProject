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

namespace MyWebsite.API
{
    //brings in the UserViewModel for the profile view
    public class ProfileViewController : ApiController
    {
        private IProfileViewRepository _repo;

        public ProfileViewController(IProfileViewRepository repo)
        {
            this._repo = repo;
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
    }
}
