using System.ComponentModel.DataAnnotations;

namespace MyGiftList.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirebaseUserId { get; set; }

        [Required] // data annotation
        public string Name { get; set; }

        [EmailAddress] // data validation annotation
        [Required]
        public string Email { get; set; }
    }
}
