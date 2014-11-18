
"use strict";

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('mongoose'); 
var config = require('./models/config');

console.log( 'env = ', env);
    console.log(' config.development.db = ', config.development.db);

var db = config.development.db; 

mongoose.connect(db);
 // console.log(' config.db = ', config.db);
  var db = mongoose.connection;
  db.on('error', console.log.bind(console, 'Connection error...'));
  db.once('open', function callback() {
    console.log('trend_api db opened');
  });

var userSchema = mongoose.Schema({
    firstName: String
  });

var User = mongoose.model('User', userSchema);



var getTrendsArray = function  () {

    User.find(function (err, posts) {
        //if we get an error, throw it to error handler
        //not sure yet how next works, so also sending to console
        if (err) {
            console.log(err);
            return next(err);
        }
        
        //recieved all of the posts, so send them in the response as a json
        res.json(posts);
        var re =  res.json(posts);
        console.log('re', re);
    });


}

getTrendsArray(); 



