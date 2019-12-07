import React from "react";
import articlesContent from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articlesContent.find(article => article.name === name);
  const otherArticles = articlesContent.filter(
    article => article.name !== name
  );
  if (!article) return <h1>Article doesn't exist</h1>;
  return (
    <>
      <h1>{article.title} </h1>

      <p>{article.content}</p>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
