import Head from "next/head";
import Link from "next/link";

const home = () => {
  return (
    <div>
      <Head>
        <title>/</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="flex justify-center text-6xl pt-9">
          Uh oh! This is a dead place!
        </h1>
        <h1 className="flex justify-center text-4xl p-9">
          Go to{" "}
          <Link href="/distantsynths">
            <a className="px-4 text-bold text-sky-500 hover:underline">@distantsynths</a>
          </Link>
        </h1>
      </main>
    </div>
  );
};

export default home;
