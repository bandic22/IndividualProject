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
    public class RequestExploreController : ApiController
    {
        private IExploreRequestsRepository _repo;

        public RequestExploreController(IExploreRequestsRepository repo)
        {
            this._repo = repo;
        }

        public RequestViewModel Get(int id)
        {
            return _repo.GetRequestInfo(id);
        }
    }
}

