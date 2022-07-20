using System;
using System.ComponentModel.DataAnnotations;

namespace MyGiftList.Models
{
    public class Gift
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ShopUrl { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        public decimal Price { get; set; }

        public int UserId { get; set; }

    }
}
