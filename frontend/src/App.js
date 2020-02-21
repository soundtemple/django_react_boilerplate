import React from "react";
import "./App.css";
import ArticleListView from "../src/blog/components/articleList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Soundtemple</h1>
      </header>
      <ArticleListView />
    </div>
  );
}

export default App;
