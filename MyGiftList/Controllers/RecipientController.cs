using Microsoft.AspNetCore.Mvc;
using MyGiftList.Models;
using MyGiftList.Repositories;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipientController : ControllerBase
    {
        private readonly IRecipientRepository _recipientRepository;
        private IUserRepository _userRepository;

        public RecipientController(IRecipientRepository recipientRepository, IUserRepository userRepository)
        {
            _recipientRepository = recipientRepository;
            _userRepository = userRepository;
        }

        // GET: api/<RecipientController>
        // Lists only recipients created by current user
        [HttpGet]
        public IActionResult Get(int id)
        {
            id = GetCurrentUser().Id;
            var userRecipients = _recipientRepository.GetAll(id);
            if (userRecipients == null)
            { return NotFound(); }
            return Ok(userRecipients);
        }

        // GET api/<RecipientController>/5
        [HttpGet("GetRecipientByIdWithGifts/{id}")]
        public IActionResult GetRecipientByIdWithGifts(int id)
        {
            var recipient = _recipientRepository.GetRecipientByIdWithGifts(id);
            if (recipient == null)
            {
                return NotFound();
            }
            return Ok(recipient);
        }

        //// GET api/<RecipientController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<RecipientController>
        [HttpPost]
        public IActionResult Post(Recipient recipient)
        {
            recipient.UserId = GetCurrentUser().Id;
            _recipientRepository.Add(recipient);

            return CreatedAtAction("Get", new { id = recipient.Id }, recipient);
        }


        //// PUT api/<RecipientController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<RecipientController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
