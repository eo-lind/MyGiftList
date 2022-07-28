using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyGiftList.Models;
using MyGiftList.Repositories;
using System.Security.Claims;

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize] // annotation for protected routes (only authenticated users have access)
    public class RecipientGiftController : ControllerBase
    {
        // -----repository pattern (separates data access logic/business logic -- acts as a middle man)----- //
        private readonly IRecipientGiftRepository _recipientGiftRepository;
        private IUserRepository _userRepository;

        public RecipientGiftController(IRecipientGiftRepository recipientGiftRepository, IUserRepository userRepository)
        {
            _recipientGiftRepository = recipientGiftRepository;
            _userRepository = userRepository;
        }
        // --------------------------------------------------------------------------------------------------//

        [HttpGet("{id}")] // method decoration with route parameter
        public IActionResult GetRecipientGiftById(int id)
        {
            var recipientGift = _recipientGiftRepository.GetRecipientGiftById(id);
            if (recipientGift == null)
            {
                return NotFound();
            }
            return Ok(recipientGift); // OK() is used when we want to return data
        }

        [HttpPost]
        public IActionResult Post(RecipientGift recipientGift)
        {
            recipientGift.UserId = GetCurrentUser().Id;
            _recipientGiftRepository.Add(recipientGift);

            return NoContent(); // NoContent() is used when we don't have any data to return
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, RecipientGift recipientGift)
        {
            _recipientGiftRepository.Update(recipientGift);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _recipientGiftRepository.Delete(id);
            return NoContent();
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
