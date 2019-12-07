import React from "react";
import articlesContent from "./article-content";
import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = () => {
  return <ArticlesList articles={articlesContent} />;
};

export default ArticlesListPage;
