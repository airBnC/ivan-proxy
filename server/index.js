const express = require('express');
const path = require('path');
const morgan = require('morgan');
const request = require('request');

const app = express();

app.use(morgan('dev'));
app.use(/(\/rooms\/100|\/rooms\/[1-9][0-9]|\/rooms\/[1-9])\b/, express.static(path.join(__dirname, '../public')));

app.get(/\/api\/rooms\/\d+\/(general|amenities)/, (req, res) => {
  const forwardURL = `http://ec2-18-217-35-168.us-east-2.compute.amazonaws.com${req.url}`;
  req.pipe(request(forwardURL)).pipe(res);
});
app.get(/\/api\/listings\/\d+\/(averagestars|reviews)/, (req, res) => {
  const forwardURL = `http://localhost:3004${req.url}`;
  req.pipe(request(forwardURL)).pipe(res);
});
app.get('/api/rooms/:listingID/bookingInfo', (req, res) => {
  const forwardURL = `http://localhost:3002${req.url}`;
  req.pipe(request(forwardURL)).pipe(res);
});


app.listen(3000);
