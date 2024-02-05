
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userCurrent } from "../Js/SliceUser/Sliceuser";

const Profil = () => {
    const isAuth = localStorage.getItem("token");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuth) {
        dispatch(userCurrent());
      }
    }, []);
    const user = useSelector((state) => state.user?.user);
    console.log(user)
  return (
    <div>
      <div>
      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>
    </div>
    </div>
  )
}

export default Profil
