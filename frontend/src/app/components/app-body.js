import React from "react";
import ArticleListView from "../../blog/components/articleList";
import SignIn from "../../auth/components/signin";

const Header = props => {
  return (
    <>
      <SignIn />
      <ArticleListView />
    </>
  );
};

export default Header;
