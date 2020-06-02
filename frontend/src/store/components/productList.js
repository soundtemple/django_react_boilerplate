import React, { useState, useEffect } from "react";
import axios from "axios";

// A list of all products across all collections

const ProductListView = (props) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // empty array in callback ensures api call is only made once after state update
  //   axios.get("http://localhost:9000/products/").then((resp) => {
  //     setProducts(resp.data);
  //   });
  // }, []);

  return (
    <>
      <h2>Soundtemple products</h2>
      {products.map((product, index) => (
        <div key={index}>
          <h4>{product.title}</h4>
          <p>{product.detail}</p>
        </div>
      ))}
    </>
  );
};

export default ProductListView;
