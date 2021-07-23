import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticleListView = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // empty array in callback ensures api call is only made once after state update
    axios.get("/blog/").then((resp) => {
      setArticles(resp.data);
    });
  }, []);

  return (
    <>
      <h2>.: SOUNDTEMPLE NEWS :.</h2>
      <p>It's all pretty new here. The website is new and a WIP. The software page has some new stuff. Head over there.</p>
      {articles.map((article, index) => (
        <div key={index}>
          <h4>{article.title}</h4>
          <p>{article.content}</p>
        </div>
      ))}
    </>
  );
};

export default ArticleListView;
