import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from 'react-router-dom';

const ProductList = () => {
  let { id } = useParams();
  //let catId = 3;
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://apolis-grocery.herokuapp.com/api/products/cat/${id}`)
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
