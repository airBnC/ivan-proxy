const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.get(/\/api\/rooms\/\d+\/(general|amenities)/, (req, res) => {
  const forwardURL = `http://ec2-18-217-35-168.us-east-2.compute.amazonaws.com${req.url}`;
  res.redirect(forwardURL);
});
app.get(/\/api\/listings\/\d+\/(averagestars|reviews)/, (req, res) => {
  const forwardURL = `http://ec2-54-241-139-163.us-west-1.compute.amazonaws.com${req.url}`;
  res.redirect(forwardURL);
});
app.get('/api/rooms/:listingID/bookingInfo', (req, res) => {
  const forwardURL = `http://ec2-34-210-45-213.us-west-2.compute.amazonaws.com${req.url}`;
  res.redirect(forwardURL);
});
app.post('/rooms', (req, res) => {
  res.redirect(307, 'http://localhost:3001/rooms');
});

app.listen(3000);
