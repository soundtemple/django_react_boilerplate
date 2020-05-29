import React from "react";
import AppContext from "../../app/components/app-context";

const HomePage = (props) => {
  const { user } = React.useContext(AppContext);
  return (
    <>
      <h2>Latest from Soundtemple</h2>
      <p>Some stuff in the news</p>
      <p>Some new music</p>
      <p>Some new software</p>
    </>
  );
};

export default HomePage;
