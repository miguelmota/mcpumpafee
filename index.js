var server = require('./src/server')

var port = process.env.PORT || 7591

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
