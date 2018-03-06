const db = require('../../database/index');

const expect = require('chai').expect


describe('Games', () => {
  it('should select the first game from the games table and equal PLAYERUNKNOWNS BATTLEGROUNDS', (done) => {
    db
      .any('select gameName from games where gameId = 1')
      .then((data) => {
        expect(data[0].gamename).to.equal('PLAYERUNKNOWNS BATTLEGROUNDS');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should have an early access property', (done) => {
    db
      .any('select * from games where gameId = 2')
      .then((data) => {
        expect(data[0].hasOwnProperty('earlyaccess')).to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});

describe('Users', () => {
  it('should contain a username', (done) => {
    db
      .any('select * from users where userId = 1')
      .then((data) => {
        expect(data[0].hasOwnProperty('username')).to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should have a number of total products owned', (done) => {
    db
      .any('select * from users where userId = 2')
      .then((data) => {
        expect(typeof data[0].usertotalproducts === 'number').to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should have a number of total reviews written', (done) => {
    db
      .any('select * from users where userId = 3')
      .then((data) => {
        expect(typeof data[0].usertotalreviews === 'number').to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});

describe('Reviews', () => {
  it('should contain userid and a gameid', (done) => {
    db
      .any('select * from reviews where reviewId = 1')
      .then((data) => {
        expect(data[0].hasOwnProperty('userid') && data[0].hasOwnProperty('gameid')).to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should contain numbers for both reviewtotalhelpful and hoursonrecord', (done) => {
    db
      .any('select * from reviews where reviewId = 1')
      .then((data) => {
        expect(typeof data[0].reviewtotalhelpful === 'number' && typeof data[0].hoursonrecord === 'number').to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should contain a reviewpost', (done) => {
    db
      .any('select * from reviews where reviewId = 1')
      .then((data) => {
        expect(data[0].hasOwnProperty('reviewpost')).to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});