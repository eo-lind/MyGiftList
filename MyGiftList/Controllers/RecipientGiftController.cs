using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyGiftList.Models;
using MyGiftList.Repositories;
using System.Security.Claims;

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class RecipientGiftController : ControllerBase
    {
        private readonly IRecipientGiftRepository _recipientGiftRepository;
        private IUserRepository _userRepository;

        public RecipientGiftController(IRecipientGiftRepository recipientGiftRepository, IUserRepository userRepository)
        {
            _recipientGiftRepository = recipientGiftRepository;
            _userRepository = userRepository;
        }

        // GET: api/<RecipientGiftController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<RecipientGiftController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<RecipientGiftController>
        [HttpPost]
        public IActionResult Post(RecipientGift recipientGift)
        {
            recipientGift.UserId = GetCurrentUser().Id;
            _recipientGiftRepository.Add(recipientGift);

            return CreatedAtAction("Get", new { id = recipientGift.Id }, recipientGift);
        }


        //// PUT api/<RecipientGiftController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<RecipientGiftController>/5
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
