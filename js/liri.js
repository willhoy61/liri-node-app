
var tweet = require('twitterKeys');

client.get('search/tweets', {q: "william hoy"}, function(error, tweets, response) {
	console.log(tweets);
});

