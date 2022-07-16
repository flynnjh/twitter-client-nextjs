const userTweets = ({userInfo}) => {
    return (
        <main className="flex flex-col justify-center place-items-center h-auto">
            <div className="w-2/3 p-9">
                <h1 className="text-xl">
                    Tweets ({userInfo.statuses_count})
                </h1>
                <h1 className="text-sm pt-1 font-extralight">
                    Only most recent @{userInfo.screen_name} tweet is shown here, to keep you focused.
                </h1>
                <h1 className="text-xl pt-9 text-sky-500 hover:underline">
                    <a href={"https://nitter.42l.fr/i/status/" + userInfo.status.id_str}>
                        <li>
                            {userInfo.status.text}
                        </li>
                    </a>
                </h1>
            </div>
        </main>
    );
}

export default userTweets;