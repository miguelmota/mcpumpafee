require('dotenv').config()
var koa = require('koa')
var route = require('koa-path-match')()
var serve = require('koa-static')
var {getTweets} = require('./tweets')

var app = new koa()

app.use(require('kcors')())
app.use(serve(__dirname + '/../public'))
app.use(route('/tweets').get(async ctx => {
  tweets = await getTweets()
  ctx.body = tweets
}))

module.exports = app
