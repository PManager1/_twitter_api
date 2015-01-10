"use strict";
/* jshint -W115 */
//  Using Twitter API Client for node -- https://github.com/ttezel/twit


// var app = express();


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



var trendSchema = mongoose.Schema({
    tName: String,
    tName_h: String,    
    region: String, 
    tweetArr: []
  });

var Trend = mongoose.model('Trend', trendSchema);





var saveTweetLinks = function  (obj) {
    
console.log(' ~~~~~ ---- inside  save Tweet Links  function ---- ');

var tweetName = obj.tName_h;

     T.get('search/tweets', { q: tweetName, count: 10 }, function(err, data, response) {


      var tweet_links =  _.pluck(data.statuses, 'id_str');
      var _tweetArr = []; 

      for (var i = 0; i < tweet_links.length; i++) {
        var link = "https://twitter.com/23243F/status/"
        var linkk = link+tweet_links[i]; 
        _tweetArr.push(linkk);
        
        console.log(' tweet Arr value for    ='.green + tweetName + "  = ", _tweetArr);
      };

      console.log(' ~~~~ 3 ~~~~~  coming out of the  tweet search loop  ~~~~~~~~~');
        
        obj.tweetArr = _tweetArr;
        console.log('   new obj after adding tweet Arr  = ', obj);
        Trend.create(obj); 
    })
}







var fillTrendsArray = function  (trendArr) {
    console.log('~~~~~~~~~ inside  fillTrendsArray  ~~~~~~~~~');
     Trend.find({}).exec(function (err, collection) {
        console.log(' $$$$ inside Trend.findUser  = ');
       

            for (var i = 0; i < trendArr.length; i++) {
                var value = trendArr[i]; 
                var nohash = value;
                console.log(' no hash  = ', nohash);


              
                    if (nohash.charAt( 0 ) == '#' ){
                        console.log(' if _____  hash present = '.red, nohash);
                        var nohash_replaced = nohash.replace('#','');
                        
                        console.log(' after replacing ____ no hash  = ', nohash_replaced);                          
                        var obj = {tName: value, tName_h: nohash_replaced, region: 'EU'};

                        console.log(' no hash ---- obj ==', obj);

                        saveTweetLinks(obj); 

                    }   


                    else{

                    var obj = {tName: value, tName_h: nohash_replaced, region: 'EU'};

                        console.log(' with hash == obj ', obj);

                        saveTweetLinks(obj); 

                        
                    }    // else

            };   // for loop
      })
}












var Twit          = require('twit'),
    config        = require('./config.js'),
    colors        = require('colors'),
    _             = require('underscore'),
    fs            = require('fs'),
    T             = new Twit(config),
    command       = process.argv[2],
    args          = process.argv.splice(3),
    woeid         = 1,
    DST           = 1,
    aantal        = 20,
    expanded      = false,
    date          = new Date(),
    timestamp     = date.valueOf(),
    filename      = 'output\\' + command + '-' + timestamp + '.txt',
    writeFile     = null,
    argLine       = args.join(' '),
    toWrite       = true,
    stdin         = process.stdin.setEncoding('utf8'); //process.stdin;

// stdin.setRawMode(true);
process.stdin.resume();  //stdin.resume();
// stdin.setEncoding('utf8');

// console.log(' T ==', T);

// var setupWriting = function () {
//     if (toWrite) {
//         if (!fs.existsSync("output")) {
//             fs.mkdirSync("output", 502, function (err) {
//                 if (err) {
//                     console.log(new Error(err));
//                 }
//             });
//         }
//         writeFile = fs.createWriteStream(filename);
//     }
// };

var output = function (msg, notToFile) {
    var cleanMsg;
    if (msg) {
        if (toWrite && writeFile && !notToFile) {
            // remove any color codes from the text;
            cleanMsg = msg.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/ig, '');
            writeFile.write(cleanMsg + '\r\n');
        }
        console.log(msg);
    } else {
        if (toWrite && writeFile && !notToFile) {
            writeFile.write('\r\n');
        }
        console.log();
    }
};

var graceFullExit = function (msg) {
    if (msg) {
        console.log("Gracefull exit");
    }
    if (writeFile) {
        toWrite = false;
        writeFile.end();
    }
    // set timeout for gracefull exit and closing file
    setTimeout(function () {
        process.exit();
    }, 1000);
};

// on any data into stdin
// process.stdin.on('data', function (key) {
//     // ctrl-c ( end of text )
//     if (key === '\u0003') {
//         graceFullExit(true);
//     }
//     // write the key to stdout all normal like
//     process.stdout.write(key);
// });



var trends = function (id) {
    console.log(' ~~~~~~~~~~~~~~ calling trends function ~~~~~~~~~~~~~~');
    console.log(' id = ', id);
    var woeid = (id === '2') ? 23424909 : 1,
        i;

    T.get('trends/place', {id : woeid}, function (err, reply) {

        if (err) {
            output(err, true);
            return false;
        }

        output('trends for: ' + reply[0].locations[0].name + '\r\n');
        var trendArr = [];

        for (i = 0; i < reply[0].trends.length; i++) {
            output('__--> ' + reply[0].trends[i].name);
            var t = reply[0].trends[i].name;
            console.log(' t = ',t);
            trendArr.push(t); 
        }

        fillTrendsArray(trendArr); 
        graceFullExit();

    });
};



trends(24865675); 




