import React from "react";
import articlesContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articlesContent.find(article => article.name === name);
  const otherArticles = articlesContent.filter(
    article => article.name !== name
  );
  if (!article) return <NotFoundPage />;
  return (
    <>
      <h1>{article.title} </h1>

      <p>{article.content}</p>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
