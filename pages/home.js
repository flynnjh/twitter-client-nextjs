import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import {useState, useEffect} from "react";

const home = () => {

  const [userInfo, setUserInfo] = useState();
  const [isLoading, setLoading] = useState(false);

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
      <p className="flex justify-center p-9 text-7xl font-bold">Loading...</p>
    );
  if (!userInfo)
    return (
      <p className="flex justify-center p-9 text-7xl font-bold">
        No profile data
      </p>
    );

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex justify-center flex-row h-auto p-9">
          <h1 className="text-3xl">
            Hello <strong className="font-bold">@{userInfo.screen_name}</strong>! You have {userInfo.followers_count} followers. Go ahead and make a tweet.
          </h1>
        </div>
    </div>
  );
};

export default home;
