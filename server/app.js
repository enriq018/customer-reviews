const express = require('express');

const customerReviews = require('./routes/customerReviews');

const app = express();


app.use('/customerReviews', customerReviews);

module.exports = app;
