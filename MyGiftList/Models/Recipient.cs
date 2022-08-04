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
        public string ImageUrl { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "{0:dd/MM}")] // data validation annotation
        public DateTime Birthday { get; set; }

        public int UserId { get; set; }

        public List<RecipientGift> RecipientGifts{ get; set;}
    }
}
