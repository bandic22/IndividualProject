using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class Request
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Request title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Request description is required")]
        public string Description { get; set; }
        public int NoOfReplies { get; set; }
        public DateTime? DateCreated { get; set; }
        public string FileUrl { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
        
    }
}