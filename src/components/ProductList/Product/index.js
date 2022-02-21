import React from "react";

const Product = (props) => {
    const {productName, mrp, price, unit, description, image} = props.data;
  return (
    <div className="col-sm-4">
      <div className="card">
      <img src={ 'http://rjtmobile.com/grocery/images/'+ image } class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ productName }</h5>
          <p className="card-text">
           { description }
          </p>
          <a href="#" className="btn btn-primary btn-block">
            Add to Cart
          </a>
        </div>
        
      </div>
    </div>
  );
};
export default Product;