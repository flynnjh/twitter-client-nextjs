import Head from "next/head";

const home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center text-7xl p-9">Hello!</div>
    </div>
  );
};

export default home;
