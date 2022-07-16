import { TwitterClient } from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: process.env.NEXT_PUBLIC_TWITTER_APIKEY,
  apiSecret: process.env.NEXT_PUBLIC_TWITTER_APISECRET,
  accessToken: process.env.NEXT_PUBLIC_TWITTER_ACCESSKEY,
  accessTokenSecret: process.env.NEXT_PUBLIC_TWITTER_ACCESSSECRET,
});

export default async function handler(req, res) {

    console.log(req.query);
    
    const userInfo = await twitterClient.accountsAndUsers.usersShow({ screen_name: req.query.user });
    const url = userInfo.profile_image_url
    let imageType = url.substring(url.length - 4);
    let userProfileImage = url.substring(0, url.length - 10);
    userProfileImage = userProfileImage + "400x400" + imageType;


  res.status(200).json({ userProfileImage });
}
