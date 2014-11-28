# --------

 while true; do no app.js; sleep 60; done

while true; do node wwtrends.js; sleep 10800; done
while true; do node us-trends.js; sleep 10800; done
while true; do node asia-trends.js; sleep 10800; done
while true; do node eu-trends.js; sleep 10800; done






from:  https://github.com/j3lte/twitter-toolkit

# how to run 

n app_get_in_mongo.js


# search Trends

node app.js trends 1

Get the yahoo placed id from here   
https://developer.yahoo.com/geo/geoplanet/

http://woeid.rosselliot.co.nz/lookup/asia%20pacific



node app.js trends 1   // for world wide
node app.js trends 2   // for Netherlands
trends(23424977);    // US 

ASIA   56126019



node app.js trends  23424977   // for US 


# example commands ========

node app-copy.js lookup rushnwash      # searches for this particular twitter handle. 

node app-copy.js search mtvstars      # searches for it and return some stuff. 






# Mongo Commands

use news; 
db.dropDatabase();

# drop db

var dbs = db.getMongo().getDBNames(); for(var i in dbs){    db = db.getMongo().getDB( dbs[i] );    print( "dropping db " + db.getName() );    db.dropDatabase();}


#show all collections

db.getCollectionNames()

# find 
db.trends.find().forEach(printjson)













twitter-toolkit
===============

I created this toolkit as one of my first NodeJS projects. Beware that some of my code can be inefficient. In a different version I will clean this up, for now I just wanted to share what I had build then (somewhere at the end of 2012, if I am correct).

Credits to [JvdMeulen](https://twitter.com/JvdMeulen), he created a big chuck of the initial code. Great job, Jasper! Hope to see more of your work at logt.nu (He has a snowtracker on [sneeuw.logt.nu](http://sneeuw.logt.nu)


It is a simple app that does a couple of things. You can dump all tweets into an automatically generated file. On the commandline you will see it in different colors.

##Features

  * Search : search
    
    `node app.js search <search parameters>`
    
  * Stream : realtime results
    
    `node app.js stream <search parameters>`
    
  * Lookup : lookup information on a user
    
    `node app.js lookup <screenname>`
    
  * Dump : dump max 2400 (Twitter limit) tweets from a user
    
    `node app.js dump <screenname>`
    
  * Trends : trending topics, 1 = worldwide, 2 = Netherlands
    
    `node app.js trends <id>`

##Install

Just checkout the git repository and install the dependencies

```
npm install
```

Copy the example-config.js to config.js and fill in the specified details, e.g. API-key and all.

And run the app

```
node app.js <command> <arguments>
```

##Development

```
grunt
```

All files (*.js) are checked with jslint and jshint
