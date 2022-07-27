using Microsoft.AspNetCore.Mvc;
using MyGiftList.Repositories;
using MyGiftList.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GiftController : ControllerBase
    {
        private readonly IGiftRepository _giftRepository;
        private IUserRepository _userRepository;

        public GiftController(IGiftRepository giftRepository, IUserRepository userRepository)
        {
            _giftRepository = giftRepository;
            _userRepository = userRepository;
        }

        // GET: api/<GiftController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_giftRepository.GetAll());
        }

        // POST api/<GiftController>
        [HttpPost]
        public IActionResult Post(Gift gift)
        {
            gift.UserId = GetCurrentUser().Id;
            _giftRepository.Add(gift);

            return CreatedAtAction("Get", new { id = gift.Id }, gift);
        }

        // POST api/<GiftController>
        [HttpPost("AddRecipientGift")]
        public IActionResult Post(RecipientGift recipientGift)
        {
            recipientGift.UserId = GetCurrentUser().Id;
            _giftRepository.AddRecipientGift(recipientGift);

            return CreatedAtAction("Get", new { id = recipientGift.Id }, recipientGift);
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
