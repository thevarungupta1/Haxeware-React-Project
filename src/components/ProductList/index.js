import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  let catId = 3;
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://apolis-grocery.herokuapp.com/api/products/cat/${catId}`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div class="row">
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
