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
    public class CategoryController : ApiController
    {
        private ICategoryViewRepository _repo;

        public CategoryController(ICategoryViewRepository repo)
        {
            this._repo = repo;
        }

        [HttpGet]
        [Route("api/category/getRequestCategories")]
        public IHttpActionResult GetRequestCategories()
        {
            var requestCategories = this._repo.GetRequestCategories();
            return Ok(requestCategories);
        }

        [HttpGet]
        [Route("api/category/getGearCategories")]
        public IHttpActionResult GetGearCategories()
        {
            var gearCategories = this._repo.GetGearCategories();
            return Ok(gearCategories);
        }

        [HttpGet]
        [Route("api/category/getFilteredRequests")]
        public IHttpActionResult GetFilteredRequests(RequestFilterViewModel vm)
        {
            var filteredRequests = this._repo.GetFilteredRequestView(vm);
            return Ok(filteredRequests);
        }
    }
}
