import Head from "next/head";
import { GetStaticProps } from "next";
import { PrismaClient } from "@prisma/client";
import { User, Article } from "interfaces/types";

interface IUser {
  allUsers: User[];
}

const prisma = new PrismaClient();

export default function Home({ allUsers }: IUser) {
  console.log(JSON.stringify(allUsers, null, 4));
  return (
    <div>
      <Head>NextJS + Prisma2</Head>
      <h2>Users + Articles</h2>
      {allUsers.map(user => (
        <UserList key={user.id} user={user} />
      ))}
    </div>
  );
}

const UserList = ({ user }: { user: User }) => (
  <ul>
    <h3>
      Name: {user.name}, Email: {user.email}
    </h3>
    {user.articles?.map(article => (
      <ArticleList key={article.id} {...article} />
    ))}
  </ul>
);

const ArticleList = ({ title, content }: Article) => (
  <li>
    <h4>Title: {title}</h4>
    <p>{content}</p>
  </li>
);

export const getStaticProps: GetStaticProps = async () => {
  const allUsers = await prisma.user.findMany({
    // @ts-ignore
    include: { articles: true },
  });

  return {
    props: { allUsers },
    revalidate: 1,
  };
};
