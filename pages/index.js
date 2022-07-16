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
        <div className="flex justify-center text-6xl pt-9">Uh oh! This is a dead place!</div>
        <div className="flex justify-center text-4xl p-9">Go to <Link className="px-4 text-bold text-sky-500 hover:underline" href="/distantsynths">@distantsynths</Link></div>
      </main>
    </div>
  );
};

export default home;
