using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using MyGiftList.Utils;
using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public class GiftRepository : BaseRepository, IGiftRepository
    {
        public GiftRepository(IConfiguration configuration) : base(configuration) { }

        // retrieve a list of all gifts
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

        // creates a new gift record
        public void Add(Gift gift)
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

        // creates a new RecipientGift record
        public void AddRecipientGift(RecipientGift recipientGift)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO RecipientGift (RecipientId, GiftId, Qty, Notes, UserId)
                        OUTPUT INSERTED.ID
                        VALUES (@RecipientId, @GiftId, @Qty, @Notes, @UserId)
                        ";

                    DbUtils.AddParameter(cmd, "@RecipientId", recipientGift.RecipientId);
                    DbUtils.AddParameter(cmd, "@GiftId", recipientGift.GiftId);
                    DbUtils.AddParameter(cmd, "@Qty", recipientGift.Qty);
                    DbUtils.AddParameter(cmd, "@Notes", recipientGift.Notes);
                    DbUtils.AddParameter(cmd, "@UserId", recipientGift.UserId);

                    recipientGift.Id = (int)cmd.ExecuteScalar();


                }
            }
        }
    }
}
