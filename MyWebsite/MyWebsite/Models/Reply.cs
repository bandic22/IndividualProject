using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class Reply
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Message is required")]
        public string Message { get; set; }
        public bool IsHidden { get; set; }
        public DateTime? DateCreated { get; set; }
        public List<Rating> Ratings { get; set; }
        public int NoOfLikes { get; set; }
        public int NoOfDislikes { get; set; }
        public bool CanNotRate { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

        public int RequestId { get; set; }
        [ForeignKey("RequestId")]
        public Request Request { get; set; }

    }

    public class ReplyDto
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public bool IsHidden { get; set; }
        public DateTime? DateCreated { get; set; }
        public ApplicationUserDto User { get; set; }
        public List<RatingDto> Ratings { get; set; }
        public int NoOfLikes { get; set; }
        public int NoOfDislikes { get; set; }
        public bool CanNotRate { get; set; }

        public int RequestId { get; set; }
        [ForeignKey("RequestId")]
        public RequestDto Request { get; set; }
    }
}