import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home(){
  
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setLoading] = useState(false)
  
  const getUser = (username) => {
    axios.get(`/api/user/${username}`)
    .then(function (response) {
      setUserInfo(response.data.userInfo);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    })
  };

  useEffect(() => {
    setLoading(true);
    getUser("roachswallower3");
    setLoading(false);
  }, [isLoading]);

  
  if (isLoading) return <p className="flex justify-center p-9 text-7xl font-bold" >Loading...</p>
  if (!userInfo) return <p className="flex justify-center p-9 text-7xl font-bold">No profile data</p>

  console.log(userInfo.name);

  return (
    <div>
      <Head>
        <title>{userInfo.name} (@{userInfo.screen_name}) </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="flex p-9 text-7xl font-bold">Hello, {userInfo.screen_name}.</h1>
        <h2 className="flex pl-9 text-xl font-extralight">{userInfo.description}.</h2>
      </main>
    </div>
  );
}
