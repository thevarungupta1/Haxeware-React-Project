import React from "react";

const Category = (props) => {
    const {catId, catName, catImage}  = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
      <img src={ 'http://rjtmobile.com/grocery/images/'+ catImage } class="card-img-top" alt={catName} />
        <div className="card-body">
          <h5 className="card-title">{ catName }</h5>
          
          <a href="#" className="btn btn-primary btn-block">
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
};
export default Category;
