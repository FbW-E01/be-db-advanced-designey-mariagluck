import mongoose from "mongoose";
import TwitterUser from "./models/twitter_user.js";

console.log("Hello 123");

const username = "twitterApp";
const password = "tweettweet";
const db = "twitterdb";

const connectionString = `mongodb://${username}:${password}@localhost:27017/${db}`;

mongoose.connection.on("error", (e) => {
  console.log("Error", e);
});
mongoose.connection.on("connecting", () => {
  console.log("connecting");
});
mongoose.connection.on("connected", () => {
  console.log("connected");
});
mongoose.connection.on("disconnecting", () => console.log(" Disconnecting"));
mongoose.connection.on("disconnected", () => console.log("Disconnected"));

try {
  await mongoose.connect(connectionString);

  console.log("you are twitting!");

  const twitterUser1 = new TwitterUser({
    id: 25031 - 68 - 464 - 858 - 7115628,
    user_id: 035 - 42778 - 3194,
    username: "superTwittera",
    email: "twittera@twitt.org",
    password: "sdoijfsdgjaoi",
    favourites: 145,
    followers_count: 4678,
    following_count: 3546,
    tweets: 356,
    mentions: 863,
    created_at: "18/05/2021",
    updated_at: "30/08/2021",
    last_update: "10/09/2021",
    time_zone: "CET, Berlin",
    geo_zone: "Berlin",
  });

  tweeter
    .save()
    .then(() => console.log(` ${twitterUser1} can now tweet"`))
    .catch((e) => console.log("Unable to save twitter login", e))
    .finally(() => mongoose.connection.close());
} catch (e) {
  console.log("Fatal error was encountered: ", error);
}
