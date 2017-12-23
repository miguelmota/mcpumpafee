require('dotenv').config()
var Twitter = require('twit')
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

var params = {
  screen_name: 'officialmcafee',
  count: 100
}

function getTweets() {
  return new Promise((resolve, reject) => {
    var result = []

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        tweets.forEach(tweet => {
          if (tweet.text.startsWith('Coin of the day')) {
            result.push(tweet.id_str)
          }
        })
      }

      resolve(result)
    })
  })
}

module.exports = {getTweets}
