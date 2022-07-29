using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyGiftList.Models
{
    public class RecipientGift
    {
        public int Id { get; set; }
        
        public int RecipientId { get; set; }
       
        public int GiftId { get; set; }

        [Required] // data annotation
        public int Qty { get; set; }

        [Required]
        public string Notes { get; set; }
        
        public int UserId { get; set; }
        
        public Gift Gift { get; set; }
    }
}
