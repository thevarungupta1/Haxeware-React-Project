import React from "react";
import './style.css';

const Product = (props) => {
    const {productName, mrp, price, unit, description, image} = props.data;
  return (
    <div className="col-sm-4">
      <div className="card">
      <img src={ 'http://rjtmobile.com/grocery/images/'+ image } class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ productName }</h5>          
          <p className="card-text">
           { unit }
          </p>
          <h2> &#8377; { price } <del> &#8377;{ mrp }</del></h2>
          <a href="#" className="btn btn-primary btn-block">
            Add to Cart
          </a>
        </div>
        
      </div>
    </div>
  );
};
export default Product;