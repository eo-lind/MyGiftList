using Microsoft.AspNetCore.Mvc;
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

        //// POST api/<RecipientController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

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
