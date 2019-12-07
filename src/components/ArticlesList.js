import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    <h1>Articles </h1>
    {articles.map((article, key) => (
      <Link to={`/article/${article.name}`}>
        <h3 key={article.name}>{article.title}</h3>
      </Link>
    ))}
  </>
);
export default ArticlesList;
