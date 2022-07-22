using Microsoft.AspNetCore.Mvc;
using MyGiftList.Repositories;
using MyGiftList.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyGiftList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiftController : ControllerBase
    {
        private readonly IGiftRepository _giftRepository;
        public GiftController(IGiftRepository giftRepository)
        {
            _giftRepository = giftRepository;
        }

        // GET: api/<GiftController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_giftRepository.GetAll());
        }

        //// GET api/<GiftController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<GiftController>
        [HttpPost]
        public IActionResult Post(Gift gift)
        {

            // ----------CHANGE LATER TO GET CURRENT USER'S ID---------- //
            gift.UserId = 2;
            _giftRepository.Add(gift);

            return CreatedAtAction("Get", new { id = gift.Id }, gift);
        }

        //// PUT api/<GiftController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<GiftController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
