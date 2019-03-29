require('dotenv').config()

const config = {
  twitter: {
    username: process.env.BOT_USERNAME,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 1000 * 60
  }
}

    Twit = require('twit')
    T = new Twit(config.twitter);

const tweet = (text, cb) => {
  console.log('sending out a tweet..')
  T.post('statuses/update', { status: text }, async (e, data, res) => {
    cb(e, data, res)
  })
}

const getTweets = (user, cb) => {
  T.get('statuses/user_timeline', { screen_name: user }, (e, data, res) => {
    cb(e, data, res)
  })
}

module.exports = {
  tweet,
  getTweets
}
