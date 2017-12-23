var host = window.location.protocol + '//' + window.location.host
var url = host + '/tweets'

twttr.ready(function() {
  var tweetsContainer = document.querySelector('.TweetsContainer')

  fetch(url)
  .then(function(resp) {
    resp.json()
    .then(function(tweets) {
      tweetsContainer.innerHTML = ''
      tweets.forEach(function(tweetId) {
        var container = document.createElement('div')
        tweetsContainer.appendChild(container)
        twttr.widgets.createTweet(
          tweetId,
          container
        );
      })
    })
    .catch(function() {
      tweetsContainer.innerHTML = 'Error loading tweets'
    })
  })
})

