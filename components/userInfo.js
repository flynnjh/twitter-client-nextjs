const profile = ({userInfo, userProfileImage}) => {
    return (
        <main>
        <div className="flex flex-col justify-center place-items-center h-auto">
          <div className="w-full">
            <div className="flex h-auto p-4 px-9 pt-9 justify-center">
              <img className="flex h-36 w-auto rounded-full" src={userProfileImage}/>
              <div className="px-9 p-4">
                <h1 className="flex pb-1 text-6xl">{userInfo.name}</h1>
                <h1 className="flex text-4xl">
                  <a className="hover:text-sky-500 hover:underline" href={"https://nitter.42l.fr/" + userInfo.screen_name}>
                    @{userInfo.screen_name}
                  </a>
                </h1>
              </div>
            </div>
            <h2 className="flex pl-9 text-xl font-extralight justify-center">
              {userInfo.description}
            </h2>
            {userInfo.entities.url ? (
              <h2 className="flex pl-9 text-xl font-extralight text-sky-500 hover:underline justify-center">
                <a href={userInfo.entities.url.urls[0].expanded_url}>
                  {userInfo.entities.url.urls[0].expanded_url}
                </a>
              </h2>
            ) : null}
            <div className="flex flex-row px-9 py-3 justify-center">
              <a className="transition duration-150 hover:underline">
                {userInfo.friends_count ? <h5 className="font-extralight pr-4">
                  <strong className="font-bold pr-1">{userInfo.friends_count}</strong>
                  Following
                </h5> : null}
              </a>
              <a className="transition duration-150 hover:underline">
                <h5 className="font-extralight pr-4">
                  <strong className="font-bold pr-1">{userInfo.followers_count}</strong>
                  Followers
                </h5>
              </a>
            </div>
          </div>
        </div>
      </main>
    );
}

export default profile;