var Twit = require('twit')
var _ = require('underscore')

var colors = require('colors')

var T = new Twit({
    consumer_key: 'X8Grq1lxceBJ1bo4d12rAeXXV',
    consumer_secret: 'vIuBbTentRtUmJ5k9iyknKTBrSa5N65KON3LvSiA07yPTxPmVt',
    access_token: '2834351286-MjvSf8PTBaEn5d7QmtnpRFIz59A3gdzoZM5fnBH',
    access_token_secret: 'nghmxxpL9PmA44SfMZe9qXYuYDlZhkkoQ7E2YnY56nMYA'
})



T.get('search/tweets', { q: 'homeless sf', count: 100 }, function(err, data, response) {

 // console.log(data);
 // console.log(' data.statuses = '.red, data.statuses);

  var tweet_links =  _.pluck(data.statuses, 'id_str');
  // console.log(' tweet_links ='.blue, tweet_links);

  var tweetArr = []; 

  for (var i = 0; i < tweet_links.length; i++) {
    var link = "https://twitter.com/23243F/status/"
    var linkk = link+tweet_links[i]; 
    tweetArr.push(linkk);
  };
  console.log(' tweet Arr value ='.red, tweetArr);

})






