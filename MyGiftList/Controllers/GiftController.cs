using Microsoft.AspNetCore.Mvc;
using MyGiftList.Repositories;
using MyGiftList.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;


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
        // Lists only gifts created by current user
        [HttpGet]
        public IActionResult Get(int id)
        {
            id = GetCurrentUser().Id;
            var userGifts = _giftRepository.GetAll(id);
            if (userGifts == null)
            {
                return NotFound();
            }
            return Ok(userGifts);
        }

        // POST api/<GiftController>
        [HttpPost]
        public IActionResult Post(Gift gift)
        {
            gift.UserId = GetCurrentUser().Id;
            _giftRepository.Add(gift);

            return CreatedAtAction("Get", new { id = gift.Id }, gift);
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
