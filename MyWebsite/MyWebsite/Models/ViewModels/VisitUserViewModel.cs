using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class VisitUserViewModel
    {
        public List<Request> Requests { get; set; }
        public UserSpace UserSpace { get; set; }
        public List<GearItem> UserGear { get; set; }
        public string DisplayName { get; set; }
        public bool IsAuthorized { get; set; }
    }
}