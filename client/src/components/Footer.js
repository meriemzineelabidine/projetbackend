import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg_footer">
      <div className="ligne1_footer container">
        <div className="boom">
          {" "}
          <span style={{ color: "black" }}> B</span>
          <span style={{ color: "orange" }}>OO</span>
          <span style={{ color: "black" }}>M</span>
        </div>
        <div className="product">
          {" "}
          <Link>CATEGORIE</Link>
          <div><Link>Technologie</Link></div>
          <div><Link>Cuisine</Link></div>
          <div><Link>Santé && Beauté</Link></div>
          <div><Link>Modes</Link></div>
        </div>
        <div className="contact">
          {" "}
          <Link>CONTACTS</Link>
        </div>
        <div className="media">
          {" "}
          <Link> RESEAUX SOXIAUX</Link>
        </div>
        <div></div>
      </div>
      <div className="ligne2_footer container">
        <div style={{ marginTop: "20px" }}>
          {" "}
          Created by on 14/02/24. Copyright © 2024 . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
