import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Endpoints from '../../api/Endpoints';

const LoginPage = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function onChangeHandler(event){
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function onSubmitHandler(event){
        event.preventDefault()
        axios.post(Endpoints.LOGIN_UR, user)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
        }, (error) => {
          console.log(error)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="wrapper">
                <h2>Login</h2>
                <hr />
                {/* {responseMessage.message && (
                  <div className="alert alert-success" role="alert">
                    {responseMessage.message}
                  </div>
                )} */}
    
                <form onSubmit={onSubmitHandler}>
                
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
                    value="Login"
                    className="btn btn-primary btn-block"
                  />
                </form>
                <br />
                <a href="#">New User? Click Here</a>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      );
}
export default LoginPage;