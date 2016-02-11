using MyWebsite.Models.ViewModels;
using MyWebsite.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyWebsite.API
{
    public class VisitUserController : ApiController
    {
        private IVisitUserRepository _repo;

        public VisitUserController(IVisitUserRepository repo)
        {
            this._repo = repo;
        }

        public VisitUserViewModel getVisitViewModel(string displayName)
        {
            var userProfileView = _repo.GetVisitUserInfo(displayName);
            return userProfileView;
        }
    }
}
