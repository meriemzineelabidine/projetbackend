
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userRegister } from "../Js/SliceUser/Sliceuser";
import '../css/Register.css'
const Register = () => {
    const [register, setregister] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        
      });
      const dispatch = useDispatch();
      const navigate=useNavigate()
  return (
    
        <div className="contenu_register">
      <div className="box_register">
        <form onSubmit={(e) => e.preventDefault()} className="box_form">
          <h2 className="txt_style">Please register</h2>
          <input
            type="text"
            className="input_login"
            name="username"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            className="input_login"
            name="lastname"
            placeholder="last name"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="text"
            className="input_login"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="password"
            className="input_login"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />

          <button
            className="btn_login"
            onClick={() => {
              dispatch(userRegister(register),navigate("/profil"));
            }}
          >
            register
          </button>

          <h5>
          <div className="link_login"> u already have account <Link to="/login" className="link_register">sign in </Link></div>
          </h5>
        </form>
      </div>
    </div>
   
  )
}

export default Register

