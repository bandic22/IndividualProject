using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class Request
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Request title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Author name was not defined")]
        public string Author { get; set; }
        [Required(ErrorMessage = "Request category is required")]
        public List<RequestCategory> RequestCategory { get; set; }
        [Required(ErrorMessage = "Request description is required")]
        public string Description { get; set; }
        public int NoOfReplies { get; set; }
        public DateTime DateCreated { get; set; }
    }
}