using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public interface IUserRepository
    {
        User GetByFirebaseUserId(string firebaseUserId);

        void Add(User user); // void: method doesn't return a value
    }
}