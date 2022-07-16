const profile = ({userInfo, userProfileImage}) => {
    return (
        <main>
        <div className="flex flex-col justify-center place-items-center h-auto">
          <div className="w-1/2">
            <div className="flex h-auto p-4 px-9 pt-9">
              <img
                className="flex h-36 w-auto rounded-full"
                src={userProfileImage}
              ></img>
              <div className="px-9 p-4">
                <h1 className="flex pb-1 text-6xl">{userInfo.name}</h1>
                <h1 className="flex text-4xl">
                  <a
                    className="hover:text-sky-500 hover:underline"
                    href={"https://twitter.com/" + userInfo.screen_name}
                  >
                    @{userInfo.screen_name}
                  </a>
                </h1>
              </div>
            </div>
            <h2 className="flex pl-9 text-xl font-extralight">
              {userInfo.description}
            </h2>
            {userInfo.entities.url ? (
              <h2 className="flex pl-9 text-xl font-extralight text-sky-500 hover:underline">
                <a href={userInfo.entities.url.urls[0].expanded_url}>
                  {userInfo.entities.url.urls[0].expanded_url}
                </a>
              </h2>
            ) : null}
            <div className="flex flex-row px-9 py-3">
              <a className="transition duration-150 hover:underline">
                <h5 className="font-extralight pr-4">
                  <strong className="font-bold">{userInfo.friends_count}</strong>{" "}
                  Following
                </h5>
              </a>
              <a className="transition duration-150 hover:underline">
                <h5 className="font-extralight pr-4">
                  <strong className="font-bold">{userInfo.followers_count}</strong>{" "}
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