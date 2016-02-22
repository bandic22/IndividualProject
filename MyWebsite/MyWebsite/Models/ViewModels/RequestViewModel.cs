using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class RequestViewModel
    {
        public RequestDto Request { get; set; }
        public List<ReplyDto> Replies { get; set; }
    }
}