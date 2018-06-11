const express = require('express');
const path = require('path');

const app = express();

app.use(/(\/rooms\/100|\/rooms\/[1-9][0-9]|\/rooms\/[1-9])\b/, express.static(path.join(__dirname, '../public')));
app.use('*/node_modules', express.static(path.join(__dirname, '../node_modules')));

app.listen(3000);
