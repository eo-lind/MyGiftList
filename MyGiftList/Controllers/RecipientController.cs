using Microsoft.AspNetCore.Mvc;
using MyGiftList.Models;
using MyGiftList.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipientController : ControllerBase
    {
        private readonly IRecipientRepository _recipientRepository;

        public RecipientController(IRecipientRepository recipientRepository)
        {
            _recipientRepository = recipientRepository;
        }

        // GET: api/<RecipientController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_recipientRepository.GetAll());
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
            // ----------CHANGE LATER TO GET CURRENT USER'S ID---------- //
            recipient.UserId = 1;
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
    }
}
