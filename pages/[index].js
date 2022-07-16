import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (router.isReady) {
      getUser(router.query.index);
      setLoading(false);
    }
  }, [router.isReady]);
  
  if (isLoading) return <p className="flex justify-center p-9 text-7xl font-bold" >Loading...</p>
  if (!userInfo) return <p className="flex justify-center p-9 text-7xl font-bold">No profile data</p>

  return (
    <div>
      <Head>
        <title>{userInfo.name} (@{userInfo.screen_name}) </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col">
          <h1 className="flex p-9 text-7xl font-bold">Hello, {userInfo.screen_name}.</h1>
          <h2 className="flex pl-9 text-xl font-extralight">{userInfo.description}</h2>
          {userInfo.entities.url ? <h2 className="flex pl-9 text-xl font-extralight text-sky-500 hover:underline"><a href={userInfo.entities.url.urls[0].expanded_url}>{userInfo.entities.url.urls[0].expanded_url}</a></h2> : null}
        </div>
      </main>
    </div>
  );
}
