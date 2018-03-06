const db = require('./index');

const mockData = require('../mockData');

/* True or false generator */
const addEarlyAccess = () => Math.random() >= 0.5;

/* Add early access property to mock data objects */
mockData.forEach((el) => { el.earlyAccess = addEarlyAccess(); });

const populateGamesTable = () => {
  for (let i = 0; i < mockData.length; i += 1) {
    /* remove ' from certain game titles */
    const title = mockData[i].title.split('').filter(el => el !== "'").join('');
    db.db
      .any(`insert into games(gameName, earlyAccess) VALUES ('${title}', ${mockData[i].earlyAccess});`)
      .catch((error) => {
        console.log('ERROR:', error);
      });
  }
};

populateGamesTable();

