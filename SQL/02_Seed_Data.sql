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
    (4, 'Linen-Blend Courier Tunic Shirt', 'https://www.madewell.com/linen-blend-courier-tunic-shirt-NF263.html?color=NA5676', 'https://i.s-madewell.com/is/image/madewell/NF263_NA5676_ld?wid=480&hei=610&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0', '79.50', 2),
    (5, 'White Ceramic Vase', 'https://a.co/d/gFHPoRZ', 'https://m.media-amazon.com/images/I/61m7ZWx7ZsS._AC_SY355_.jpg', 34.99, 1),
    (6, 'Googie Modern: Architectural Drawings of Armet Davis Newlove', 'https://www.amazon.com/dp/1626401098/ref=cm_sw_r_tw_dp_8BMYDFP6YH1TABVFJ9RJ?_encoding=UTF8&psc=1', 'https://images-na.ssl-images-amazon.com/images/I/51LbHpi9f-L._SY498_BO1,204,203,200_.jpg', 38.64, 1),
    (7, 'Discovering Griffith Park: A Locals Guide', 'https://www.amazon.com/dp/1680512668/ref=cm_sw_r_tw_dp_MNHWZ4H1ZBMNEDDYK3K8?_encoding=UTF8&psc=1', 'https://images-na.ssl-images-amazon.com/images/I/51YTMYuDZqL._SX355_BO1,204,203,200_.jpg', 18.18, 2),
    (8, 'Elena Essex 1000 Piece Puzzle for Adults - Woodland Magic', 'https://a.co/d/6hWH9GO', 'https://m.media-amazon.com/images/I/81IE2ukgtBL._AC_SX425_.jpg', 24.99, 2),
    (9, 'Glamour Ghoul: The Passions and Pain of the Real Vampira, Maila Nurmi', 'https://www.amazon.com/dp/1627311009/ref=cm_sw_r_tw_dp_TT6NC3QKWZ46R0ZE5Q4G', 'https://images-na.ssl-images-amazon.com/images/I/41ONyKSgiDL._SX332_BO1,204,203,200_.jpg', 19.08, 2),
    (10, 'Glass Snack Serving Tray w/ Bamboo Divider', 'https://a.co/d/8mtU8Vk', 'https://m.media-amazon.com/images/I/715gDIyL7dL._AC_SX425_.jpg', 21.99, 1),
    (11, 'Coasters for Drinks with Gift Box', 'https://a.co/d/hkYUb8X', 'https://m.media-amazon.com/images/I/71wNfUKbkJL._AC_SX425_.jpg', 6.99, 1),
    (12, 'Large Ouija Coffee Mug', 'https://a.co/d/i5yay0l', 'https://m.media-amazon.com/images/I/71a4lF8blGL._AC_SX425_.jpg', 27.45, 1),
    (13, 'Department 56 Snow Villages National Lampoons Christmas Vacation Clark Trims the Tree Accessory Figurine', 'https://a.co/d/9ZqHFNR', 'https://m.media-amazon.com/images/I/51mtFD9v9FL._AC_SX425_.jpg', 22.45, 2),
    (14, 'Winter Summer Salt & Pepper Shaker Set', 'https://a.co/d/7VY8uZc', 'https://m.media-amazon.com/images/I/61UrebzjDQL._AC_SX425_.jpg', 26.50, 2),
    (15, 'Mushroom Table Runner', 'https://www.anthropologie.com/shop/mushroom-table-runner', 'https://images.urbndata.com/is/image/Anthropologie/69198554_044_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640', 58.00, 2),
    (16, 'Home Bar', 'https://www.anthropologie.com/shop/home-bar', 'https://images.urbndata.com/is/image/Anthropologie/78961174_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640', 19.95, 2),
    (17, 'Life in a French Country House', 'https://www.anthropologie.com/shop/life-in-a-french-country-house', 'https://images.urbndata.com/is/image/Anthropologie/78519618_048_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640', 50.00, 1),
    (18, 'Avocado Reusable Packable Tote', 'https://www.target.com/p/avocado-reusable-packable-tote-tabitha-brown-for-target/-/A-85206052#lnk=sametab', 'https://target.scene7.com/is/image/Target/GUEST_dc8534ba-da16-44cb-b192-5557ab879457?wid=199&hei=199&qlt=80&fmt=pjpeg', 5.00, 2),
    (19, 'Printed Duvet Cover & Sham Set Teal', 'https://www.target.com/p/printed-duvet-cover-sham-set-teal-opalhouse-designed-with-jungalow/-/A-84109738?preselect=83756307#lnk=sametab', 'https://target.scene7.com/is/image/Target/GUEST_e446132f-c74e-42c3-ac5f-72704f656ec0?wid=253&hei=253&qlt=80&fmt=pjpeg', 69.99, 1)
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
    (7, 'Henry Rollins', '1961-2-13', 2),
    (8, 'Maila Nurmi', '1922-12-11', 1),
    (9, 'Jenny Lewis', '1976-01-08', 1)
SET IDENTITY_INSERT [Recipient] OFF

--SET IDENTITY_INSERT [RecipientGift] ON
--INSERT INTO [RecipientGift]
--    ([Id], [RecipientId], [GiftId], [Qty], [Notes], [UserId])
--VALUES
--    (1, 1, 1, 1, 'small', 1),
--    (2, 2, 2, 1, 'have gift wrapped', 1),
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