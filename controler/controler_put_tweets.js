const Post= require("../controler/controler_tweets.js")
const put_tweets=(req,res)=>{
     const Id=req.params.body
     Post.splice(Id-1,1,req.body)
     res.send("modification du post effectuée avec succès")
}

module.exports=put_tweets