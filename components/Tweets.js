const userTweets = ({userInfo}) => {
    return (
        <main className="flex flex-col justify-center place-items-center h-auto">
            <div className="w-2/3 p-9">
                {userInfo.status ? <h1 className="text-xl">
                    Tweets ({userInfo.statuses_count})
                </h1> : null}
                {userInfo.status ? <h1 className="text-sm pt-1 font-extralight">
                    Only the most recent @{userInfo.screen_name} tweet is shown here, to keep you focused.
                </h1> : <h1 className="flex text-4xl pt-1 font-extralight">
                    @{userInfo.screen_name} hasn't tweeted.
                </h1>}
                {userInfo.status ? <h1 className="text-xl pt-9 text-sky-500 hover:underline">
                    <a href={"https://nitter.42l.fr/i/status/" + userInfo.status.id_str}>
                        <li>
                            {userInfo.status.text}
                        </li>
                    </a>
                </h1> :null}
            </div>
        </main>
    );
}

export default userTweets;