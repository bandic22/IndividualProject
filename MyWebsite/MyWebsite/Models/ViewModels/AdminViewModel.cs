using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class AdminViewModel
    {
        public List<Reply> Replies { get; set; }
        public List<Request> Requests { get; set; }
        public List<ApplicationUser> Users { get; set; }
        public List<UserSpace> UserSpaces { get; set; }
        public List<GearItem> UserGear { get; set; }
    }
}