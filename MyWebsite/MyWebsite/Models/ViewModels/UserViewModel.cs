using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class UserViewModel
    {
        public List<Request> Requests { get; set; }
        public UserSpace UserSpace { get; set; }
        public List<GearItem> UserGear { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public bool IsAuthorized { get; set; }
    }
}