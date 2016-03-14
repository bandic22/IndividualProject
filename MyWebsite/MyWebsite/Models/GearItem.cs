using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class GearItem
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "GearItem title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "GearItem title is required")]
        public string Description { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }

        public int ?SubCategoryId { get; set; }
        [ForeignKey("SubCategoryId")]
        public SubCategory SubCategory { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }

    public class GearItemDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public SubCategory SubCategory { get; set; }
        public ApplicationUserDto User { get; set; }
    }
}