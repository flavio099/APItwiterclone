const Post= require("../controler/controler_tweets.js")

const delete_tweet_byid= (req, res) =>{
    const id = parseInt(req.params.id)
    Post.filter((e)=>{
        return Post.splice(id-1,1)  
    })
    res.send("le post dont id vaut " +id+ " a été supprimé avec succès") 
}

module.exports= delete_tweet_byid



