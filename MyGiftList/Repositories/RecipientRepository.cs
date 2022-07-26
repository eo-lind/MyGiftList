﻿using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using MyGiftList.Utils; // DbUtils is a helper class we created to simplify some code (especially how to handle null values)
using MyGiftList.Models;
using Microsoft.Extensions.Configuration;

namespace MyGiftList.Repositories
{
    public class RecipientRepository : BaseRepository, IRecipientRepository
    {
        public RecipientRepository(IConfiguration configuration) : base(configuration) { }

        // retrieve a list of all recipients
        public List<Recipient> GetAll(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Birthday, ImageUrl, UserId
                        FROM Recipient
                        WHERE UserId = @id
                        ORDER BY [Name]
                        ";

                    DbUtils.AddParameter(cmd, "@id", id);

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
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                UserId = DbUtils.GetInt(reader, "UserId")
                            });
                        }

                        return recipients;
                    }
                }
            }
        }

        // get a recipient by Id as well as associated Recipient Gift objects (details view) -> this more complex query is a more efficient use of resources than separate queries for a recipient and a list of RecipientGift objects
        public Recipient GetRecipientByIdWithGifts(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT r.Id, r.[Name], r.Birthday, r.UserId, r.ImageUrl AS RecipientImage, rg.Id AS RecipientGiftId, rg.RecipientId, rg.GiftId AS GiftIdOnRecipientGift, rg.Qty, rg.notes, rg.UserId AS RecipientGiftUserId, g.Id AS GiftId, g.[Name] AS GiftName, g.ShopUrl, g.Imageurl, g.Price
                        FROM Recipient r
                        LEFT JOIN RecipientGift rg ON r.Id = rg.RecipientId
                        LEFT JOIN Gift g ON g.Id = rg.GiftId
                        WHERE r.Id = @Id
                        ORDER BY g.Name
                        ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Recipient recipient = null;
                        while (reader.Read())
                        {
                            if (recipient == null)
                            {
                                recipient = new Recipient()
                                {
                                    Id = id,
                                    Name = DbUtils.GetString(reader, "Name"),
                                    Birthday = DbUtils.GetDateTime(reader, "Birthday"),
                                    ImageUrl = DbUtils.GetString(reader, "RecipientImage"),
                                    UserId = DbUtils.GetInt(reader, "UserId"),
                                    RecipientGifts = new List<RecipientGift>()
                                };
                            }
                            // display a list of gifts assigned to that recipient if they exist
                            if (DbUtils.IsNotDbNull(reader, "RecipientGiftId"))
                            {
                                recipient.RecipientGifts.Add(new RecipientGift()
                                {
                                    Id = DbUtils.GetInt(reader, "RecipientGiftId"),
                                    RecipientId = DbUtils.GetInt(reader, "RecipientGiftUserId"),
                                    GiftId = DbUtils.GetInt(reader, "GiftIdOnRecipientGift"),
                                    Qty = DbUtils.GetInt(reader, "Qty"),
                                    Notes = DbUtils.GetString(reader, "Notes"),
                                    UserId = DbUtils.GetInt(reader, "RecipientGiftUserId"),
                                    Gift = new Gift()
                                        {
                                            Id = DbUtils.GetInt(reader, "GiftId"),
                                            Name = DbUtils.GetString(reader, "GiftName"),
                                            ShopUrl = DbUtils.GetString(reader, "ShopUrl"),
                                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                            Price = reader.GetDecimal(reader.GetOrdinal("Price"))
                                        }
                                });
                            }
                        }
                        return recipient;
                    }

                }
            }
        }

        // create a new recipient record
        public void Add(Recipient recipient) // void: method doesn't return a value
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Recipient ([Name], Birthday, ImageUrl, UserId)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @Birthday, @ImageUrl, @UserId)
                        ";

                    DbUtils.AddParameter(cmd, "@Name", recipient.Name);
                    DbUtils.AddParameter(cmd, "@Birthday", recipient.Birthday);
                    DbUtils.AddParameter(cmd, "@ImageUrl", recipient.ImageUrl);
                    DbUtils.AddParameter(cmd, "@UserId", recipient.UserId);

                    recipient.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

    }
}
