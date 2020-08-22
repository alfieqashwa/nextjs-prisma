import Head from "next/head";
import { GetStaticProps } from "next";
import { Data } from "interfaces/data";

type Props = { cello: Data };

export default function Home({ cello }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>
        Hello, my name is {cello.name}, and i'm a {cello.gender}
      </h2>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/cello`);
  const cello: Props = await res.json();

  return { props: { cello } };
};
