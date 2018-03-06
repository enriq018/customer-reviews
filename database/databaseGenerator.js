const db = require('./index');

const mockData = require('../mockData');

const populateUsersTable = () => {
  for (let i = 0; i < mockData.users.length - 1; i += 1) {
    const { userName, userTotalProducts, userTotalReviews } = mockData.users[i];
    db.db
      .any(`insert into users(userName, userTotalProducts, userTotalReviews)
        VALUES ('${userName}', ${userTotalProducts}, ${userTotalReviews});`)
      .catch((error) => {
        console.log('ERROR INSERTING USERS:', error);
      });
  }
};

const populateGamesTable = () => {
  for (let i = 0; i < mockData.games.length; i += 1) {
    /* remove ' from certain game titles */
    const title = mockData.games[i].title.split('').filter(el => el !== "'").join('');
    db.db
      .any(`insert into games(gameName, earlyAccess) VALUES ('${title}',
        ${mockData.games[i].earlyAccess});`)
      .catch((error) => {
        console.log('ERROR INSERTING GAMES:', error);
      });
  }
};

const populateReviewsTable = () => {
  for (let i = 0; i < mockData.reviews.length; i += 1) {
    const {
      gameId, userId, reviewPost, reviewTotalHelpful, hoursOnRecord,
    } = mockData.reviews[i];
    db.db
      .any(`insert into reviews(gameId, userId, reviewPost, reviewTotalHelpful, hoursOnRecord)
        VALUES (${gameId}, ${userId}, '${reviewPost}', ${reviewTotalHelpful}, ${hoursOnRecord});`)
      .catch((error) => {
        console.log('ERROR INSERTING REVIEWS:', error);
      });
  }
};

populateUsersTable();
populateGamesTable();
populateReviewsTable();
