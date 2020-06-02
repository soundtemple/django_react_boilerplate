import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppContext from "../../app/components/app-context";

const ArticleListView = (props) => {
  const [articles, setArticles] = useState([]);
  const { fixedHeightPaper } = React.useContext(AppContext);

  useEffect(() => {
    // empty array in callback ensures api call is only made once after state update
    axios.get("http://localhost:9000/blog/").then((resp) => {
      setArticles(resp.data);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <h2>Soundtemple news</h2>
          {articles.map((article, index) => (
            <div key={index}>
              <h4>{article.title}</h4>
              <p>{article.content}</p>
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ArticleListView;
