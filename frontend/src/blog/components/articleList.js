import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticleListView = props => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // empty array in callback ensures api call is only made once after state update
    axios.get("http://localhost:9000/blog/").then(resp => {
      console.log(resp.data);
      setArticles(resp.data);
    });
  }, []);

  return (
    <>
      <h2>Article List</h2>
      {articles.map((article, index) => (
        <>
          <h4 key={article.id}>{article.title}</h4>
          <p>{article.content}</p>
        </>
      ))}
    </>
  );
};

export default ArticleListView;
