using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class UserSpace
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "UserSpace description is required")]
        public string Description { get; set; }
        [Required(ErrorMessage = "UserSpace title is required")]
        public string Title { get; set; }
       
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }

    public class UserSpaceDto
    {
        public string Description { get; set; }
        public string Title { get; set; }
        public int Id { get; set; }
        public ApplicationUserDto User { get; set; }
    }
}