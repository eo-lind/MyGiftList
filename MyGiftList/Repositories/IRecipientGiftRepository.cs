using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public interface IRecipientGiftRepository
    {
        void Delete(int id);
        void Add(RecipientGift recipientGift);
        void Update(RecipientGift recipientGift);
    }
}