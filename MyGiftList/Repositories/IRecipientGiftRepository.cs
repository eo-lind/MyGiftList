using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public interface IRecipientGiftRepository
    {
        void Delete(int id); // void: method doesn't return a value
        void Add(RecipientGift recipientGift); // void: method doesn't return a value
        void Update(RecipientGift recipientGift); // void: method doesn't return a value
        RecipientGift GetRecipientGiftById(int id);
    }
}