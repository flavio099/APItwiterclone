
const Post = require("../controler/controler_tweets.js")

const get_all_tweets = (req, res) => {
  res.json(Post)
}
module.exports = get_all_tweets
