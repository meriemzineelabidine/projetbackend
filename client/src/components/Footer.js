import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import { FaAddressCard, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

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
          <div>
            <Link className="list_categorie">Technologie</Link>
          </div>
          <div>
            <Link className="list_categorie">Cuisine</Link>
          </div>
          <div>
            <Link className="list_categorie">Santé && Beauté</Link>
          </div>
          <div>
            <Link className="list_categorie">Modes</Link>
          </div>
        </div>
        <div className="contact">
          {" "}
          <Link>CONTACTS</Link>
          <div className="list_contact" >
            <Link><div><FaMapMarkerAlt fontSize={10} /> CITE IBN KHALDOUN,GABES</div></Link>
            <Link><div><FaPhone fontSize={10}/> 75291458</div></Link>
            <Link><div><FaEnvelope fontSize={10}/> BOOM@gmail.com</div></Link>
          </div>
        </div>
        <div className="media">
          {" "}
          <Link> RESEAUX SOCIAUX</Link>
          <div className="lien_media">
            <Link>
              <div>
                {" "}
                <FaFacebook size={20} />
              </div>
            </Link>
            <Link>
              <div>
                {" "}
                <FaTwitter size={20} />
              </div>
            </Link>
            <Link>
              <div>
                {" "}
                <FaInstagram size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="ligne2_footer container">
        <div style={{ marginTop: "20px",marginBottom:"20px" }}>
          {" "}
          Copyright © 2024.All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
