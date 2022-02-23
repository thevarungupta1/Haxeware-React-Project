import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const SubCategoryList = () => {
  let { id } = useParams();
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://apolis-grocery.herokuapp.com/api/subcategory/${id}`)
      .then((response) => {
        console.log(response.data);
        setSubCategories(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Sub Categories</h2>
      <ul class="list-group">
        {subcategories.map((data) => (
          <li class="list-group-item">{data.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategoryList;
