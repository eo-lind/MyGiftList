using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using MyGiftList.Utils;
using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public class GiftRepository : BaseRepository
    {
        public GiftRepository(IConfiguration configuration) : base(configuration) { }

        // retrieves a list of all gifts
        public List<Gift> GetAll()
        { 
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], ShopUrl, ImageUrl, Price, UserId
                        FROM Gift
                        ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var gifts = new List<Gift>();
                        
                        while (reader.Read())
                        {
                            gifts.Add(new Gift()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                ShopUrl = DbUtils.GetString(reader, "ShopUrl"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Price = reader.GetDecimal(reader.GetOrdinal("Price")),
                                UserId = DbUtils.GetInt(reader, "UserId")
                            });
                        }
                        return gifts;
                    }
                }
            }
        }
    }
}
