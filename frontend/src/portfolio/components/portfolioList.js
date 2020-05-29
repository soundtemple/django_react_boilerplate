import React, { useState, useEffect } from "react";
import axios from "axios";

const PortfolioListView = (props) => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // empty array in callback ensures api call is only made once after state update
  //   axios.get("http://localhost:9000/portfolio/").then((resp) => {
  //     setItems(resp.data);
  //   });
  // }, []);

  return (
    <>
      <h2>Music</h2>
      {/* {items.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>{item.detail}</p>
        </div>
      ))} */}
    </>
  );
};

export default PortfolioListView;
