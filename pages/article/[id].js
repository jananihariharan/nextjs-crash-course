import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { baseURL } from "../../config";
import Meta from "../../components/Meta";

const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  // We can fetch the article using an API in the getServerSideProps method

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// both the methods getStaticProps and getServerSideProps takes in a parameter context
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(`${baseURL}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${baseURL}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
  // When next build is run, Next.js will check if getStaticPaths returned fallback:false,
  // it will then build ONLY the paths returned by getStaticPaths.
  return {
    paths,
    fallback: false,
  };

  /* NOTE: This option is useful if you have a small number of paths to create or new page data is not added often.
   If you find that you need to add more paths, and you have fallback:false, you will need to run next build again 
   so that the new paths can be generated
  */
};

// Using a combination of getStaticProps and getStaticPaths
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   );

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false
//   };
// };

export default Article;
