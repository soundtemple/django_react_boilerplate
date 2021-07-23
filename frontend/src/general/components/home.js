import React from "react";
import AppContext from "../../app/components/app-context";

const HomePage = (props) => {
  const { user } = React.useContext(AppContext);
  return (
    <>
      <h2>.: SOUNDTEMPLE :.</h2>
      <p>Hey {user.username || 'welcome'},</p>
      <p>This is the mantel piece for my tinkerings with music technology.</p>
    </>
  );
};

export default HomePage;
