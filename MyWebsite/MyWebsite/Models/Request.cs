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
        public DateTime DateCreated { get; set; }
        public string FileUrl { get; set; }

        public List<Category> Categories { get; set; }

        public List<GearItem> GearItems { get; set; }
        public List<Reply> Replies { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }

    public class RequestDto
    {
        public string Title { get; set; }
        public DateTime DateCreated { get; set; }
        public int NoOfReplies { get; set; }
        public string Description { get; set; }
        public List<CategoryDto> Categories { get; set; }
        public List<GearItemDto> GearItems { get; set; }
        public List<ReplyDto> Replies { get; set; }
        public ApplicationUserDto User { get; set; }
        public string FileUrl { get; set; }
        public int Id { get; set; }
    }
}