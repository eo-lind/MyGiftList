using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public interface IUserRepository
    {
        User GetByFirebaseId(string firebaseUserId);

        void Add(User user);
    }
}