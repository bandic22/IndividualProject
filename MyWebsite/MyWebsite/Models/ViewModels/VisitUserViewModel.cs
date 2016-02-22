using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Models.ViewModels
{
    public class VisitUserViewModel
    {
        public List<RequestDto> Requests { get; set; }
        public UserSpaceDto UserSpace { get; set; }
        public List<GearItemDto> UserGear { get; set; }
        public List<ImageDto> UserImages { get; set; }
        public string DisplayName { get; set; }
        public bool IsAuthorized { get; set; }
    }
}