import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import {useState, useEffect} from "react";


const home = () => {

  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Damn, you pressed enter. That's crazy man.");
      postStatus(e.target.value);
      setPost("");
    }
  };


  const [userInfo, setUserInfo] = useState();
  const [isLoading, setLoading] = useState(false);
  
  const [post, setPost] = useState();

  const getUser = (username) => {
    axios
      .get(`/api/user/${username}`)
      .then(function (response) {
        setUserInfo(response.data.userInfo);
        axios
          .get(`/api/image/${username}`)
          .then(function (response) {
            setUserProfileImage(response.data.userProfileImage);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {});
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const postStatus = (statusText) => {
    axios.post('/api/post', {
      tweet: statusText
    })
    .then(function (response) {
      console.log(response);
    })
  };

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (router.isReady) {
      getUser("Rukrudo");
      setLoading(false);
    }
  }, [router.isReady]);

  if (isLoading)
    return (
      <p className="flex justify-center p-9 text-3xl">Loading...</p>
    );
  if (!userInfo)
    return (
      <p className="flex justify-center p-9 text-3xl">
        Loading...
      </p>
    );

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex flex-col h-auto p-9">
          <h1 className="text-3xl">
            Hello <a className="font-bold" href={"/" + userInfo.screen_name}>@{userInfo.screen_name}</a>! You have {userInfo.followers_count} followers. Go ahead and make a tweet.
          </h1>
          <div className="py-9">
            <input className="bg-transparent py-9 w-full input input-bordered text-2xl"
              placeholder="What's happening?"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
    </div>
  );
};

export default home;
