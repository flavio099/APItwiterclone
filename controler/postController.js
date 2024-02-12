const Post = require("../controler/controler_tweets.js")

const get_all_tweets = (req, res) => {
    res.json(Post)
}

const get_tweets_by_id = (req, res) => {
    const id = parseInt(req.params.id)
    res.send(Post.filter((e) => {
        return e.id === id
    }))
}


module.exports = { get_all_tweets, get_tweets_by_id }