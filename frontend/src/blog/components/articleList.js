import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticleListView = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // empty array in callback ensures api call is only made once after state update
    axios.get("http://localhost:9000/blog/").then((resp) => {
      setArticles(resp.data);
    });
  }, []);

  return (
    <>
      <h2>Soundtemple news</h2>
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
