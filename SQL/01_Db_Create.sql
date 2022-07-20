USE [master]

IF db_id('MyGiftList') IS NULl
  CREATE DATABASE [MyGiftList]
GO

USE [MyGiftList]
GO


DROP TABLE IF EXISTS [RecipientGift];
DROP TABLE IF EXISTS [Recipient];
DROP TABLE IF EXISTS [Gift];
/* DROP TABLE IF EXISTS [Category]; */
DROP TABLE IF EXISTS [User];
GO

USE [master]

IF db_id('MyGiftList') IS NULl
  CREATE DATABASE [MyGiftList]
GO

USE [MyGiftList]
GO


DROP TABLE IF EXISTS [RecipientGift];
DROP TABLE IF EXISTS [Recipient];
DROP TABLE IF EXISTS [Gift];
--DROP TABLE IF EXISTS [Category];
DROP TABLE IF EXISTS [User];
GO

CREATE TABLE [User] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Gift] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [ShopUrl] nvarchar(255) NOT NULL,
  [ImageUrl] nvarchar(255) NOT NULL,
  [Price] decimal NOT NULL,
  --[CategoryId] int NOT NULL,
  [UserId] int NOT NULL
)
GO

CREATE TABLE [Recipient] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [Birthday] datetime NOT NULL,
  [UserId] int NOT NULL
)
GO

--CREATE TABLE [Category] (
--  [Id] int PRIMARY KEY IDENTITY(1, 1),
--  [UserId] int NOT NULL,
--  [Name] nvarchar(255) NOT NULL
--)
--GO

CREATE TABLE [RecipientGift] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [RecipientId] int NOT NULL,
  [GiftId] int NOT NULL,
  [Qty] int NOT NULL,
  [Notes] nvarchar(255),
  [UserId] int NOT NULL
)
GO

--ALTER TABLE [Gift] ADD FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id])
--GO

ALTER TABLE [Gift] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Recipient] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

--ALTER TABLE [Category] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
--GO

ALTER TABLE [RecipientGift] ADD FOREIGN KEY ([RecipientId]) REFERENCES [Recipient] ([Id])
GO

ALTER TABLE [RecipientGift] ADD FOREIGN KEY ([GiftId]) REFERENCES [Gift] ([Id])
GO

ALTER TABLE [RecipientGift] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

