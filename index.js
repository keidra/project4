var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var app = express();
var json = require('./products.json');

var secret = "mysupersecretpassword";

var mongoose = require('mongoose');
var User = require('./models/user');
mongoose.connect('mongodb://localhost/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', require('./controllers/products'));
app.use('/api/users', require('./controllers/users'));




app.listen(3000);
