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
    public class RecipientController : ControllerBase
    {
        // -----repository pattern (separates data access logic/business logic -- acts as a middle man)----- //
        private readonly IRecipientRepository _recipientRepository;
        private IUserRepository _userRepository;

        public RecipientController(IRecipientRepository recipientRepository, IUserRepository userRepository)
        {
            _recipientRepository = recipientRepository;
            _userRepository = userRepository;
        }
        // --------------------------------------------------------------------------------------------------//

        [HttpGet] // method decoration
        public IActionResult Get(int id)
        {
            id = GetCurrentUser().Id;
            var userRecipients = _recipientRepository.GetAll(id);
            if (userRecipients == null)
            { return NotFound(); }
            return Ok(userRecipients); // OK() is used when we want to return data
        }

        [HttpGet("GetRecipientByIdWithGifts/{id}")] // method decoration with route parameter
        public IActionResult GetRecipientByIdWithGifts(int id)
        {
            var recipient = _recipientRepository.GetRecipientByIdWithGifts(id);
            if (recipient == null)
            {
                return NotFound();
            }
            return Ok(recipient);
        }

        [HttpPost]
        public IActionResult Post(Recipient recipient)
        {
            recipient.UserId = GetCurrentUser().Id;
            _recipientRepository.Add(recipient);

            return CreatedAtAction("Get", new { id = recipient.Id }, recipient);
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
