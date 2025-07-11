import React from "react";
import Head from "next/head";

const Meta = (props) => {
  const {
    title = "WebDev Newz",
    keywords = "web development, programming",
    description = "Get the latest news in web dev",
  } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.io" />
      <title>{title}</title>
    </Head>
  );
};

// Meta.defaultProps = {
// title: ,
// keywords: ,
// description:
// };

export default Meta;
