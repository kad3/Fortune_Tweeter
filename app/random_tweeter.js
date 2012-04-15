// var fortunes = require('./fortunes.arr');
// var request = require('request');
// var cred = require('./credentials.js');

// var tweeter = new OAuth(
// 	cred.request_token,
// 	cred.access_token,
// 	cred.
// 	)


// request.post({
// 	url: 'https://dev.twitter.com/docs/api/1/post/statuses/update',
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// 	body: JSON.stringify({
// 		status: "You will have a good day today!"
// 	})
// }, function(error, response, body){
// 	console.log(body);
// });
/////////////////////////////////////////////

var OAuth= require('oauth').OAuth;
var cred = require('./credentials.js');
var twitterer = new OAuth(
			"https://api.twitter.com/oauth/request_token",
			"https://api.twitter.com/oauth/access_token",
			cred.consumer_key,
			cred.consumer_secret,
			"1.0",
			null,
			"HMAC-SHA1"
		  );

var fortunes = require('./fortunes');

// var status = tweets[0].status;
var status = "You will have a good day today!";

var body = ({'status': status});

  // url, oauth_token, oauth_token_secret, post_body, post_content_type, callback

twitterer.post("http://api.twitter.com/1/statuses/update.json",
				cred.access_token_key, cred.access_token_secret, body, "application/json",
				function (error, data, response2) {
				if(error){
					console.log('Error: Something is wrong.\n'+JSON.stringify(error)+'\n');
					for (i in response2) {
						out = i + ' : ';
						
						try {
							out+=response2[i];
						} catch(err) {}

						out += '/n';
						console.log(out);
					}
				}else{
					console.log('Twitter status updated.\n');
					console.log(response2+'\n');
				}
				});