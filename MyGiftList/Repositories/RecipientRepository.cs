using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using MyGiftList.Utils;
using MyGiftList.Models;
using Microsoft.Extensions.Configuration;

namespace MyGiftList.Repositories
{
    public class RecipientRepository : BaseRepository, IRecipientRepository
    {
        public RecipientRepository(IConfiguration configuration) : base(configuration) { }

        // retrieve a list of all recipients
        public List<Recipient> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Birthday, UserId
                        FROM Recipient
                        ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var recipients = new List<Recipient>();

                        while (reader.Read())
                        {
                            recipients.Add(new Recipient()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Birthday = DbUtils.GetDateTime(reader, "Birthday"),
                                UserId = DbUtils.GetInt(reader, "UserId")
                            });
                        }

                        return recipients;
                    }
                }
            }
        }

        // create a new recipient record
        public void Add(Recipient recipient)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Recipient ([Name], Birthday, UserId)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @Birthday, @UserId)
                        ";

                    DbUtils.AddParameter(cmd, "@Name", recipient.Name);
                    DbUtils.AddParameter(cmd, "@Birthday", recipient.Birthday);
                    DbUtils.AddParameter(cmd, "@UserId", recipient.UserId);

                    recipient.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
