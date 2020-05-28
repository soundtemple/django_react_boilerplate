import React from "react";
import AppContext from "../../app/components/app-context";

const HomePage = (props) => {
  const { user, updateUser } = React.useContext(AppContext);
  return (
    <>
      <h2>Latest from Soundtemple</h2>
      <p>Hey {user.name},</p>
      <p>Some stuff in the news</p>
      <p>Some new music</p>
      <p>Some new software</p>
      <p>Your username: {user.email}</p>
      <button
        onClick={(user) =>
          updateUser({ name: "Bob", email: "bob@cat.com", username: "bobcat" })
        }
      >
        Update User
      </button>
    </>
  );
};

export default HomePage;
