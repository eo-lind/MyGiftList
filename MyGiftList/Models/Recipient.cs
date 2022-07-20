using System;
using System.ComponentModel.DataAnnotations;

namespace MyGiftList.Models
{
    public class Recipient
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime Birthday { get; set; }

        public int UserId { get; set; }

    }
}
