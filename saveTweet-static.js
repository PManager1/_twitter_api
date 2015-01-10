var Twit = require('twit')
var _ = require('underscore')

var colors = require('colors')

var q = require("q");



 var one = $q.defer();
    var two = $q.defer();
    var three = $q.defer();

    var all = $q.all([one.promise, two.promise, three.promise]);
    all.then(success)

    function success(data) {
        console.log(data);
    }
    one.promise.then(success)
    two.promise.then(success)
    three.promise.then(success)

    $timeout(function () {
        one.resolve("one done");
    }, Math.random() * 1000)

    $timeout(function () {
        two.resolve("two done");
    }, Math.random() * 1000)

    $timeout(function () {
        three.resolve("three done");
    }, Math.random() * 1000)
})















var T = new Twit({
    consumer_key: 'X8Grq1lxceBJ1bo4d12rAeXXV',
    consumer_secret: 'vIuBbTentRtUmJ5k9iyknKTBrSa5N65KON3LvSiA07yPTxPmVt',
    access_token: '2834351286-MjvSf8PTBaEn5d7QmtnpRFIz59A3gdzoZM5fnBH',
    access_token_secret: 'nghmxxpL9PmA44SfMZe9qXYuYDlZhkkoQ7E2YnY56nMYA'
})

var data = { statuses: 
   [ { metadata: [Object],
       created_at: 'Wed Jan 07 19:01:26 +0000 2015',
       id: 552902850188017660,
       id_str: '552902850188017664',
       text: 'RT @PHCSF: SF Housing Authority to open public housing waiting list for 5 days on Jan 13. http://t.co/6i5L7KLape &amp; http://t.co/BhqJ4cmOva',
       source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweeted_status: [Object],
       retweet_count: 2,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 18:33:19 +0000 2015',
       id: 552895772392308740,
       id_str: '552895772392308736',
       text: '7-Year-Old Gives \'Blessing Bags\' to the Homeless http://t.co/ELoWVMFemo #SF #News #49ers',
       source: '<a href="http://dlvr.it" rel="nofollow">dlvr.it</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweet_count: 0,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 18:18:04 +0000 2015',
       id: 552891936323821600,
       id_str: '552891936323821569',
       text: '@marymad @mercnews @OPDChris could also be job security for Brenda, look at CW Nevius in SF attacking the homeless',
       source: '<a href="https://dev.twitter.com/docs/tfw" rel="nofollow">Twitter for Websites</a>',
       truncated: false,
       in_reply_to_status_id: 552887561534730240,
       in_reply_to_status_id_str: '552887561534730241',
       in_reply_to_user_id: 10938752,
       in_reply_to_user_id_str: '10938752',
       in_reply_to_screen_name: 'marymad',
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweet_count: 0,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:56:25 +0000 2015',
       id: 552886487465730050,
       id_str: '552886487465730048',
       text: 'RT @SFPublicPress: The 4-1-1 on the #homeless crisis in your city: http://t.co/ZHzB2MvZ5e #sf #news http://t.co/TiEBWEJcVU',
       source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweeted_status: [Object],
       retweet_count: 2,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:51:26 +0000 2015',
       id: 552885235181191200,
       id_str: '552885235181191168',
       text: '@37signals we host large services for homeless in SF &amp; would love your support for our upcoming events. Let’s chat! http://t.co/jQRLSXAaxG',
       source: '<a href="http://www.hootsuite.com" rel="nofollow">Hootsuite</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: 11132462,
       in_reply_to_user_id_str: '11132462',
       in_reply_to_screen_name: '37signals',
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweet_count: 0,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:49:06 +0000 2015',
       id: 552884647000944640,
       id_str: '552884647000944640',
       text: 'SF Public Housing Waitlist Reopens 2 Homeless Applicants After 4-Yr Closure NBC Bay Are http://t.co/g9IdeIdNVf via @nbcbayarea',
       source: '<a href="https://dev.twitter.com/docs/tfw" rel="nofollow">Twitter for Websites</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweet_count: 0,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:48:05 +0000 2015',
       id: 552884389018107900,
       id_str: '552884389018107905',
       text: 'RT @SFPublicPress: The 4-1-1 on the #homeless crisis in your city: http://t.co/ZHzB2MvZ5e #sf #news http://t.co/TiEBWEJcVU',
       source: '<a href="http://www.hootsuite.com" rel="nofollow">Hootsuite</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweeted_status: [Object],
       retweet_count: 2,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:26:03 +0000 2015',
       id: 552878844114268160,
       id_str: '552878844114268162',
       text: 'RT @PHCSF: SF Housing Authority to open public housing waiting list for 5 days on Jan 13. http://t.co/6i5L7KLape &amp; http://t.co/BhqJ4cmOva',
       source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweeted_status: [Object],
       retweet_count: 2,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:25:43 +0000 2015',
       id: 552878761461293060,
       id_str: '552878761461293056',
       text: 'RT @PHCSF: We need your help for the SF homeless count coming up on Jan 29th 7pm-12am.  http://t.co/1Dv2i4eYD3 http://t.co/tHfRviB2ZI',
       source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
       truncated: false,
       in_reply_to_status_id: 552865011547533300,
       in_reply_to_status_id_str: '552865011547533312',
       in_reply_to_user_id: 50468712,
       in_reply_to_user_id_str: '50468712',
       in_reply_to_screen_name: 'PHCSF',
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweet_count: 0,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' },
     { metadata: [Object],
       created_at: 'Wed Jan 07 17:02:15 +0000 2015',
       id: 552872855613222900,
       id_str: '552872855613222912',
       text: 'The 4-1-1 on the #homeless crisis in your city: http://t.co/ZHzB2MvZ5e #sf #news http://t.co/TiEBWEJcVU',
       source: '<a href="http://bufferapp.com" rel="nofollow">Buffer</a>',
       truncated: false,
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       retweet_count: 2,
       favorite_count: 0,
       entities: [Object],
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' } ],
  search_metadata: 
   { completed_in: 0.045,
     max_id: 552902850188017660,
     max_id_str: '552902850188017664',
     next_results: '?max_id=552872855613222911&q=homeless%20sf&count=10&include_entities=1',
     query: 'homeless+sf',
     refresh_url: '?since_id=552902850188017664&q=homeless%20sf&include_entities=1',
     count: 10,
     since_id: 0,
     since_id_str: '0' } }



  console.log(' data.statuses = '.red, data.statuses);

   var arr2 = []; 
   var tweet_links =  _.pluck(data.statuses, 'id_str');

  console.log(' tweet_links ='.blue, tweet_links);



  tweetArr = []; 

  for (var i = 0; i < tweet_links.length; i++) {
    var link = "https://twitter.com/23243F/status/"
    var linkk = link+tweet_links[i]; 
    tweetArr.push(linkk);
  };

  console.log(' tweet Arr value ='.red, tweetArr);

  // https://twitter.com/23243F/status/




