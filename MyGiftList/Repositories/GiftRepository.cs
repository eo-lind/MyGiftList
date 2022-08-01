using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using MyGiftList.Utils; // DbUtils is a helper class we created to simplify some code (especially how to handle null values)
using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public class GiftRepository : BaseRepository, IGiftRepository
    {
        public GiftRepository(IConfiguration configuration) : base(configuration) { }

        // retrieve a list of all gifts
        public List<Gift> GetAll(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], ShopUrl, ImageUrl, Price, UserId
                        FROM Gift
                        WHERE UserId = @id
                        ORDER BY [Name]
                        ";

                    DbUtils.AddParameter(cmd, "@id", id);

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

        // creates a new gift record
        public void Add(Gift gift) // void: method doesn't return a value
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Gift ([Name], ShopUrl, ImageUrl, Price, UserId)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @ShopUrl, @ImageUrl, @Price, @UserId)
                        ";

                    DbUtils.AddParameter(cmd, "@Name", gift.Name);
                    DbUtils.AddParameter(cmd, "@ShopUrl", gift.ShopUrl);
                    DbUtils.AddParameter(cmd, "@ImageUrl", gift.ImageUrl);
                    DbUtils.AddParameter(cmd, "@Price", gift.Price);
                    DbUtils.AddParameter(cmd, "@UserId", gift.UserId);

                    gift.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

    }
}
