import mongoose from 'mongoose';

const tweetPostSchema = new mongoose.Schema({
    author: String,
    user_id: Number,
    username: String,
    tweet_text: String,
    hashtag: String,
    created_at: Date,
    updated_at: Date
});


const Tweet = mongoose.model("tweetPosts", tweetPostSchema);

export default Post;

