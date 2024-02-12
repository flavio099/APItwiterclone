const Post= require("../controler/controler_tweets.js")

const post_tweet=(req, res) => {

    console.log(req.body);
    Post.push(req.body)
    res.send(Post)
    }
    
module.exports= post_tweet