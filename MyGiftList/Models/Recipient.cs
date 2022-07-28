using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyGiftList.Models
{
    public class Recipient
    {
        public int Id { get; set; }

        [Required] // data annotation
        public string Name { get; set; }

        [Required]
        public DateTime Birthday { get; set; }

        public int UserId { get; set; }

        public List<RecipientGift> RecipientGifts{ get; set;}
    }
}
