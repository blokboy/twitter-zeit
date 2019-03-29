require('dotenv').config()

const app = require('express')()
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')

const helpers = require(__dirname + '/helpers.js')
const twitter = require(__dirname + '/twitter.js')

app.use(helmet(),
        morgan('combined'),
        express.static('public'),
        express.json()
       )

app.get(`*`, (req, res) => {
  twitter.tweet("We've got our first bot tweet! 👋", (e, data, res) => {
    if(e) {
      console.log(e)
      res.status(500).json(e)
    } else {
      console.log('Tweeted Successfully.')
      res.status(200).end()
    }
  })
})

module.exports = app
