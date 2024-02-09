const Post= require("../controler/controler_tweets.js")

const post_tweet=(req, res) => {

    Post.push(req.body)
    res.send(Post)
    }
    
module.exports= post_tweet