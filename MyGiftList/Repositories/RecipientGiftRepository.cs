using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using MyGiftList.Utils;
using MyGiftList.Models;

namespace MyGiftList.Repositories
{
    public class RecipientGiftRepository : BaseRepository, IRecipientGiftRepository
    {
        public RecipientGiftRepository(IConfiguration configuration) : base(configuration) { }

        // gets a RecipientGift record by id
        public RecipientGift GetRecipientGiftById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, RecipientId, GiftId, Qty, Notes, UserId
                        FROM RecipientGift
                        WHERE Id = @Id
                        ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        RecipientGift recipientGift = null;
                        while (reader.Read())
                        {
                            if (recipientGift == null)
                            {
                                recipientGift = new RecipientGift()
                                {
                                    Id = id,
                                    RecipientId = DbUtils.GetInt(reader, "RecipientId"),
                                    GiftId = DbUtils.GetInt(reader, "GiftId"),
                                    Qty = DbUtils.GetInt(reader, "Qty"),
                                    Notes = DbUtils.GetString(reader, "Notes"),
                                    UserId = DbUtils.GetInt(reader, "UserId"),
                                };
                            }
                        }
                        return recipientGift;
                    }
                }
            }
        }

        // ----------------------------------
        // THIS DOESN'T WORK (Want to replace the one in GiftRepository/Controller)
        // ----------------------------------
        // creates a new RecipientGift record
        public void Add(RecipientGift recipientGift)
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

        // updates a RecipientGift record
        public void Update(RecipientGift recipientGift)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE RecipientGift
                        SET Qty = @Qty,
                            Notes = @Notes
                        WHERE Id = @Id
                        ";

                    DbUtils.AddParameter(cmd, "@Qty", recipientGift.Qty);
                    DbUtils.AddParameter(cmd, "@Notes", recipientGift.Notes);
                    DbUtils.AddParameter(cmd, "@Id", recipientGift.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        
        // deletes a RecipientGift record
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM RecipientGift WHERE Id = @Id
                        ";

                    DbUtils.AddParameter(cmd, "id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
