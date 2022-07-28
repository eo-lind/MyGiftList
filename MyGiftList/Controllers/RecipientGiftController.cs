using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyGiftList.Models;
using MyGiftList.Repositories;
using System.Security.Claims;

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class RecipientGiftController : ControllerBase
    {
        private readonly IRecipientGiftRepository _recipientGiftRepository;
        private IUserRepository _userRepository;

        public RecipientGiftController(IRecipientGiftRepository recipientGiftRepository, IUserRepository userRepository)
        {
            _recipientGiftRepository = recipientGiftRepository;
            _userRepository = userRepository;
        }

        // GET api/<RecipientGiftController>/5
        [HttpGet("{id}")]
        public IActionResult GetRecipientGiftById(int id)
        {
            var recipientGift = _recipientGiftRepository.GetRecipientGiftById(id);
            if (recipientGift == null)
            {
                return NotFound();
            }
            return Ok(recipientGift);
        }

        // POST api/<RecipientGiftController>
        [HttpPost]
        public IActionResult Post(RecipientGift recipientGift)
        {
            recipientGift.UserId = GetCurrentUser().Id;
            _recipientGiftRepository.Add(recipientGift);

            return NoContent();
        }


        // PUT api/<RecipientGiftController>/5
        // {id} is a route param
        [HttpPut("{id}")]
        public IActionResult Update(int id, RecipientGift recipientGift)
        {
            _recipientGiftRepository.Update(recipientGift);
            return NoContent();
        }

        // DELETE api/<RecipientGiftController>/5
        // {id} is a route param
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
