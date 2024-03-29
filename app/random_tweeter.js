var twit = require('twit');
var cred = require('./credentials');
var fortunes = require('./fortunes.js').fortunes;

// console.log(fortunes[0]);

var t = new twit({
	consumer_key: cred.consumer_key,
	consumer_secret: cred.consumer_secret,
	access_token: cred.access_token,
	access_token_secret: cred.access_token_secret
});

var followers = [
	"@bekahdavid",
	"@curvetheory",
	"@yokoono",
	"@Billy_Manno",
	"@Tanika_Girauard",
	"@Camelia_Capote",
	"@Ona_Kuhnle"
];

/* creates an interval which tweets with a given delay.
 * tweets are pulled from fortunes.js
 */
function intervalTweet(delay) {

	setInterval(function() {	
		var user = followers[parseInt(Math.random()*followers.length)];
		var s = '' + user + ' ' + fortunes[parseInt(Math.random()*fortunes.length)];

		t.post('statuses/update', 
			{
				status: s
			}, 
			function(err, reply) {
			if (err)
				console.log("ERROR: " + err);
			// else
			// 	console.log(reply);
		});
	}, delay*1000);

}

module.exports = intervalTweet;