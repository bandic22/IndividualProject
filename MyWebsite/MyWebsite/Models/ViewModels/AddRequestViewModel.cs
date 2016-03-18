using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class AddRequestViewModel
    {
        public Request Request { get; set; }
        public List<CatRequest> CatRequests { get; set; }
    }
}