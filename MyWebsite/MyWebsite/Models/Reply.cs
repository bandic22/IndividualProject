using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyWebsite.Models
{
    public class Reply
    {
        public int Id { get; set; }
        public string Message { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

        public int RequestId { get; set; }
        [ForeignKey("RequestId")]
        public Request Request { get; set; }
    }
}