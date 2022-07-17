import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Profile from "../components/Profile";
import Tweets from "../components/Tweets";

export default function Home() {
  const [userInfo, setUserInfo] = useState();
  const [userProfileImage, setUserProfileImage] = useState();
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
      getUser(router.query.index);
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
        <title>
          {userInfo.name} (@{userInfo.screen_name}){" "}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Profile userInfo={userInfo} userProfileImage={userProfileImage}/>
        <Tweets userInfo={userInfo}/>
      </main>
    </div>
  );
}
