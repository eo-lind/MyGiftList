using MyGiftList.Models;
using System.Collections.Generic;

namespace MyGiftList.Repositories
{
    public interface IRecipientRepository
    {
        List<Recipient> GetAll(int id);
        Recipient GetRecipientByIdWithGifts(int id);
        void Add(Recipient recipient); // void: method doesn't return a value
    }
}