DROP TABLE IF EXISTS users;

CREATE TABLE users (
  userId SERIAL PRIMARY KEY,
  userName VARCHAR (30) UNIQUE NOT NULL,
  userTotalProducts INT NOT NULL,
  userTotalReviews INT NOT NULL
);

DROP TABLE IF EXISTS games;

CREATE TABLE games (
  gameId SERIAL PRIMARY KEY,
  gameName VARCHAR (80) UNIQUE NOT NULL,
  earlyAccess BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  reviewId SERIAL PRIMARY KEY,
  gameId INT NOT NULL,
  userId INT NOT NULL,
  reviewPost TEXT NOT Null,
  reviewTotalHelpful INT NOT NULL,
  hoursOnRecord INT NOT NULL
);
