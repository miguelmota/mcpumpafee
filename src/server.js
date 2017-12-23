require('dotenv').config()
var koa = require('koa')
var route = require('koa-path-match')()
var {getTweets} = require('./tweets')

var app = new koa()

app.use(require('kcors')())
app.use(route('/tweets').get(async ctx => {
  tweets = await getTweets()
  ctx.body = tweets
}))

module.exports = app
