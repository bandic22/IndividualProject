using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public bool ?IsApproval { get; set; }

        public int ReplyId { get; set; }
        [ForeignKey("ReplyId")]
        public Reply Reply { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
    }

    public class RatingDto
    {
        public int Id { get; set; }
        public bool? IsApproval { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUserDto User { get; set; }

        public int ReplyId { get; set; }
        [ForeignKey("ReplyId")]
        public ReplyDto Reply { get; set; }
    }
}