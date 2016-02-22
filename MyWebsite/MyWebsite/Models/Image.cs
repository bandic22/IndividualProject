using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string FileUrl { get; set; }
        public string Caption { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }

    public class ImageDto
    {
        public int Id { get; set; }
        public string FileUrl { get; set; }
        public string Caption { get; set; }
        public ApplicationUserDto User { get; set; }
    }
}