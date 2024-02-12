const express=require('express')

const get_all_tweets = require("../controler/controler_get_all_tweets.js");
const get_tweets_by_id = require("../controler/controler_get_tweets_byId.js");
const delete_tweet_byid = require("../controler/controler_delete_tweets_by_id.js");
const post_tweet = require("../controler/controler_post_tweet.js");
const put_tweets = require("../controler/controler_put_tweets.js");
const postController = require('../controler/postController.js')

const router=express.Router();

router.get("", postController.get_all_tweets);
router.get("/:id",get_tweets_by_id);
router.delete("/:id",delete_tweet_byid);
router.post("/post",post_tweet);
router.put("/:id",put_tweets);


module.exports=router;