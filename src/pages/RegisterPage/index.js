import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Endpoints from "../../api/Endpoints";

const RegisterPage = () => {
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    cssClass: "",
  });
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  function onChangeHandler(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then(
        (response) => {
          //setResponseMessage(response.data.message);
          setResponseMessage({
            message: response.data.message,
            cssClass: "alert-success",
          });
        },
        (error) => {
          setResponseMessage({
            message: "Oops, something went wrong",
            cssClass: "alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <h2>Register</h2>
            <hr />
            {responseMessage.message && (
              <div className="alert alert-success" role="alert">
                {responseMessage.message}
              </div>
            )}

            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={onChangeHandler}
                  value={user.firstName}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={onChangeHandler}
                  value={user.email}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  onChange={onChangeHandler}
                  value={user.mobile}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChangeHandler}
                  value={user.password}
                  className="form-control"
                />
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <a href="#">Already register? Click Here</a>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
