import { TwitterClient } from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: process.env.NEXT_PUBLIC_TWITTER_APIKEY,
  apiSecret: process.env.NEXT_PUBLIC_TWITTER_APISECRET,
  accessToken: process.env.NEXT_PUBLIC_TWITTER_ACCESSKEY,
  accessTokenSecret: process.env.NEXT_PUBLIC_TWITTER_ACCESSSECRET,
});

const user = "distantsynths";

export default async function handler(req, res) {

    console.log(req.query);
    
    const userTweets = await twitterClient.tweets.statusesUserTimeline({
    screen_name: req.query.user,
    include_rts: false,
    count: 3200,
    });

  res.status(200).json({ userTweets });
}
