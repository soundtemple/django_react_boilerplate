import React, { useState, useEffect } from "react";
import axios from "axios";

const ShoppingCart = (props) => {
  const [productsInCart, setProductsInCart] = useState([]);

  // useEffect(() => {
  //   // empty array in callback ensures api call is only made once after state update
  //   axios.get("http://localhost:9000/cart/").then((resp) => {
  //     setProductsInCart(resp.data);
  //   });
  // }, []);

  return (
    <>
      <h2>Cart</h2>
      {/* {productsInCart.map((product, index) => (
        <div key={index}>
          <h4>{product.title}</h4>
          <p>{product.detail}</p>
        </div>
      ))} */}
    </>
  );
};

export default ShoppingCart;
