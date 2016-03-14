using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class SubCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }

        public int ?CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
    }
}