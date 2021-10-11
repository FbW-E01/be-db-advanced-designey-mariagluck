import mongoose from 'mongoose';

const twitterUserSchema = new mongoose.Schema({
    id: Number,
    user_id: Number,
    username: String,
    email: String,
    password: String,
    favourites: Number,
    followers_count: Number,
    following_count: Number,
    tweets: Number,
    mentions: Number,
    created_at: Date,
    updated_at: Date,
    last_update: Date,
    time_zone: String,
    geo_zone: String,
});

const TwitterUser = mongoose.model("twitterUsers", twitterUserSchema);

export default TwitterUser;

