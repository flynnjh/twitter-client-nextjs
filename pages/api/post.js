import { TwitterClient } from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: process.env.NEXT_PUBLIC_TWITTER_APIKEY,
  apiSecret: process.env.NEXT_PUBLIC_TWITTER_APISECRET,
  accessToken: process.env.NEXT_PUBLIC_TWITTER_ACCESSKEY,
  accessTokenSecret: process.env.NEXT_PUBLIC_TWITTER_ACCESSSECRET,
});

export default async function handler(req, res) {
  console.log(req.query);
  const tweet = req.body.tweet;
  twitterClient.tweets.statusesUpdate({
      status: tweet,
  });

  res.status(200).json({ tweet });
}
