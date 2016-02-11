using MyWebsite.Models.ViewModels;
using MyWebsite.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace MyWebsite.API
{
    public class AdminViewController : ApiController
    {
        private IAdminViewRepository _repo;

        public AdminViewController(IAdminViewRepository repo)
        {
            this._repo = repo;
        }

        [Authorize]
        public IHttpActionResult Get()
        {   //returns the user info to the client service based on the identity of the one currently logged in.
            var user = User.Identity as ClaimsIdentity;

            if (user.HasClaim("Admin", "true"))
            {
                return Ok(_repo.GetAdminViewModel());
            }

            return Unauthorized();
        }
    }
}
