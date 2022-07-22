using MyGiftList.Models;
using System.Collections.Generic;

namespace MyGiftList.Repositories
{
    public interface IGiftRepository
    {
        List<Gift> GetAll();
        void Add(Gift Gift);
    }
}