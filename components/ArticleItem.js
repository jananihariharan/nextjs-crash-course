import React from "react";
import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  console.log("article: ", article);
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      <h3>{article.title} &arr;</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
};

export default ArticleItem;
