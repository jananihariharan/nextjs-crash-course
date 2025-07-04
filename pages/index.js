// import Head from "next/head";
// import Image from "next/image";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import { baseURL } from "../config/index";

export default function Home({ articles }) {
  console.log("articles: ", articles);
  return (
    <div>
      {/* <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
      <h1>Welcome to next.js</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  // The articles are fetched through our API
  const res = await fetch(`${baseURL}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
