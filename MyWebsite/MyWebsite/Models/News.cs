using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class News
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AdminId { get; set; }
        [ForeignKey("AdminId")]
        public ApplicationUser AdminName { get; set; }
        public List<Image> Images { get; set; }
    }
}