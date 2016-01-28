using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class RequestViewModel
    {
        public Request Request { get; set; }
        public List<Reply> Replies { get; set; }
    }
}