using MyGiftList.Models;
using System.Collections.Generic;

namespace MyGiftList.Repositories
{
    public interface IRecipientRepository
    {
        List<Recipient> GetAll();
        Recipient GetRecipientByIdWithGifts(int id);
        void Add(Recipient recipient);
    }
}