import React from "react";
import "../css/Dasbord.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, logoutadmin } from "../Js/SliceUser/Sliceuser";

const Nav_dashbord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const isadmin = localStorage.getItem("isadmin");
  return (
    <div>
      <div className="nav_dashbord">
        <div>
          {" "}
          <Link className="admin_link">
            {" "}
            <div className="admin_img">
              <div className="sous_tt">Admin</div>
            </div>
            <div className="menu_d">
              <ul>
                <Link to={"/dashbord"}>
                  {" "}
                  <li>Dashbord</li>
                </Link>
                <li>
                  <button
                    className="btn_dec"
                    onClick={() => (dispatch(logoutadmin()),navigate("/"))}
                  >
                    Déconnecter
                  </button>
                </li>
              </ul>
            </div>
          </Link>
        </div>

        <div>
          <ul className="menu_list_dash">
            <Link to={"/user_dash"}>
              {" "}
              <li>Users</li>
            </Link>
            <Link to={"/produit-dash"}>
              {" "}
              <li>Produits</li>
            </Link>
            <Link to={"/commande-dash"}>
              {" "}
              <li>Commades</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav_dashbord;
