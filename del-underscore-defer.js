var _ = require('underscore');

var dfd = new _.Deferred(); //


var form = _.Deferred();
var auth = _.Deferred();

var promises = [ form.promise(), auth.promise() ];

_.when(promises).done(function(){
  console.log('   promise results');
});

form.resolve();
auth.resolve();