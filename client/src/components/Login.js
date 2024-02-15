
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Js/SliceUser/Sliceuser";
import '../css/login.css'

const Login = () => {
    const [login, setlogin] = useState({
        email: "",
        password: "",
      });
      const dispatch = useDispatch();
      const isAuth = localStorage.getItem("token");
      let navigate = useNavigate();
    
  return (
  <div>
    <div className="contenu_login">
    <div className="box_login">
      <form onSubmit={(e) => e.preventDefault()} className="box_form">
        <h2 className="txt_style">Please login</h2>
        <input
          type="text"
          className="input_login"
          name="username"
          placeholder="Email Address"
          required=""
          autofocus=""
          onChange={(e) => setlogin({ ...login, email: e.target.value })}
        />
        <input
          type="password"
          className="input_login"
          name="password"
          placeholder="Password"
          required=""
          onChange={(e) => setlogin({ ...login, password: e.target.value })}
        />
        <label className="checkbox">
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{" "}
          Remember me
        </label>
        <button
          className="btn_login"
          onClick={() => {
            dispatch(userLogin(login));
            setTimeout(() => {
              navigate("/");
            }, 1000);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          Login
        </button>
       <div className="link_login">u already have account <Link to="/" className="link_register">Register now </Link></div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Login
