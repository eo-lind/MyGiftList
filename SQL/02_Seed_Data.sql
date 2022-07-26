SET IDENTITY_INSERT [User] ON
INSERT INTO [User]
    ([Id], [Name], [Email], FirebaseUserId)
VALUES
    (1, 'Rupert', 'rupert@rupert.com', 'mSp3U1lcqWaglraPmTpF1m5LLDI3'),
    (2, 'Olivia', 'olivia@rupert.com', 'JR7QyLfQ61fiSA1saAnFNiw8k1n1')
SET IDENTITY_INSERT [User] OFF


SET IDENTITY_INSERT [Gift] ON
INSERT INTO [Gift]
    ([Id], [Name], [ShopUrl], [ImageUrl], [Price], [UserId])
VALUES
    (1, 'Dog Pajamas', 'https://a.co/hvZsINm', 'https://m.media-amazon.com/images/I/61p6or9BCyL._AC_SX425_.jpg', '26.99', 1),
    (2, 'Powerbeats Pro Wireless Earbuds', 'https://a.co/i0DAixa', 'https://m.media-amazon.com/images/I/51b2RRA1QRL._AC_SX679_.jpg', '199.95', 1),
    (3, 'Duckman - Pretty in Pink sticker', 'https://www.etsy.com/listing/743920878/duckman-duckie-pretty-in-pink-sticker?click_key=523eb516d10fdc17307517b2c3d15edadbd55c1a%3A743920878&click_sum=5135e7d3&ref=hp_rv-1', 'https://i.etsystatic.com/6272923/r/il/f7c7bd/2104704054/il_794xN.2104704054_quk0.jpg', '3.50', 2),
    (4, 'Linen-Blend Courier Tunic Shirt', 'https://www.madewell.com/linen-blend-courier-tunic-shirt-NF263.html?color=NA5676', 'https://i.s-madewell.com/is/image/madewell/NF263_NA5676_ld?wid=480&hei=610&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0', '79.50', 2)
SET IDENTITY_INSERT [Gift] OFF


SET IDENTITY_INSERT [Recipient] ON
INSERT INTO [Recipient]
    ([Id], [Name], [Birthday], [UserId])
VALUES
    (1, 'Norma Desmond', '1899-3-27', 1),
    (2, 'Rita Hayworth', '1918-10-17', 1),
    (3, 'Paul Reubens', '1952-8-27', 1),
    (4, 'Rita Hayworth', '1918-10-17', 2),
    (5, 'Norma Desmond', '1899-3-27', 2),
    (6, 'Paul Reubens', '1952-8-27', 2),
    (7, 'Henry Rollins', '1961-2-13', 2)
SET IDENTITY_INSERT [Recipient] OFF

--SET IDENTITY_INSERT [RecipientGift] ON
--INSERT INTO [RecipientGift]
--    ([Id], [RecipientId], [GiftId], [Qty], [Notes], [UserId])
--VALUES
--    (1, 1, 1, 1, 'small', 1),
--    (2, 2, 2, 1, 'have giftwrapped', 1),
--    (3, 6, 3, 2, 'order an extra for me!', 2),
--    (4, 7, 4, 1, 'XXL', 2),
--    (5, 6, 4, 2, 'one in small, one in medium', 2)
--SET IDENTITY_INSERT [RecipientGift] OFF

--SET IDENTITY_INSERT [Category] ON
--INSERT INTO [Category]
--    ([Id], [Name], [UserId])
--VALUES
--    (1, 'Toys', 1),
--    (2, 'Games', 1),
--    (3, 'Books', 1),
--    (4, 'Clothing', 1),
--    (5, 'Pets', 1),
--    (6, 'Sports & Outdoors', 2),
--    (7, 'Housewares', 2),
--    (8, 'Furniture', 2),
--    (9, 'Clothing', 2),
--    (10, 'Electronics', 1),
--    (11, 'Misc', 2)
--SET IDENTITY_INSERT [Category] OFF