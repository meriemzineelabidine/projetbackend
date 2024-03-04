import React, { useEffect } from "react";
import NavBoom from "./NavBoom";
import "../css/TelTablette.css";
import { useState } from "react";
import ArticlesTabTel from "./ArticlesTel&&Tab";
import { Link } from "react-router-dom";
import DataTelTab from "./DataCompletTel&&Tab";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../Js/SliceProduit/SliceProduit";
import Footer from "./Footer";

const TelTablette = () => {
  const dispatch = useDispatch();
  const [Articles, setArticles] = useState(ArticlesTabTel);
  const [valuesearch, setvaluesearch] = useState("");

  useEffect(() => {
    dispatch(getproduct());
  }, []);
  const produitlist = useSelector((store) => store.produit?.produit);
  console.log("pppp", produitlist);

  const handleSearch = (searchTerm) => {
    setvaluesearch(searchTerm);
    console.log("Recherche en cours avec le terme :", searchTerm);
  };
  const produitsFiltres = produitlist?.filter(
    (el) =>
      el.categorie.toLowerCase().includes(valuesearch.toLowerCase()) ||
      el.produit.toLowerCase().includes(valuesearch.toLowerCase()) ||
      el.marque.toLowerCase().includes(valuesearch.toLowerCase())
  );
  console.log("produifil", produitsFiltres);

  return (
    <div>
      <div>
        <NavBoom onSearch={handleSearch}></NavBoom>
      </div>
      <div className="block-article container">
        <div>
          <div>
            {Articles.map((el) => (
              <div className="card">
                <Link to={el.path}>
                  <div className="details">
                    <img className="img-art" src={el.img}></img>
                    <div style={{ fontWeight: "bold" }}>{el.tittre}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container block-produit">
        {produitlist
          ? produitsFiltres?.map((el) => (
              <div className="col-3">
                <Link to={`/detail/${el?._id}`}>
                  <div className="produit">
                    <div className="img-produit"style={{ backgroundImage:`url(${el?.img})`, backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                    <div className="prod-nom">{el?.nomproduit} </div>
                    <div className="prod-prix">{el?.prix} TND</div>
                    <div>
                      {" "}
                      <ReactStars
                        count={5}
                        value={el?.rating}
                        isHalf={true}
                      ></ReactStars>
                    </div>
                    <button className="btn-produit"> Ajouter au panier </button>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
      <div><Footer></Footer></div>
    </div>
  );
 
};

export default TelTablette;
