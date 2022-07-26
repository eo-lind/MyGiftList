using System.Collections.Generic;

namespace MyGiftList.Models
{
    public class RecipientGift
    {
        public int Id { get; set; }
        public int RecipientId { get; set; }
        public int GiftId { get; set; }
        public int Qty { get; set; }
        public string Notes { get; set; }
        public int UserId { get; set; }
        public Gift Gift { get; set; }
    }
}
