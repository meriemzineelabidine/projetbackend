import React, { useEffect, useState } from "react";
import "../css/Home.css";

import NavBoom from "./NavBoom";
import Affiche from "./Affiche";
import Articles from "./Articles";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../Js/SliceProduit/SliceProduit";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproduct());
  }, []);

  const [datageniral, setdatageniral] = useState(Articles);
  const produits = useSelector((store) => store.produit?.produit);
  console.log("tab", produits);

  const [term, setterm] = useState("");
  const handleSearch = (searchTerm) => {
    setterm(searchTerm);
    console.log("Recherche en cours avec le terme :", searchTerm);
  };
  const filtred = produits?.filter(
    (e) =>
      e?.categorie.toLowerCase().includes(term.toLowerCase()) ||
      e?.produit.toLowerCase().includes(term.toLowerCase()) ||
      e?.marque.toLowerCase().includes(term.toLowerCase())
  );
  return (
    <div>
      <div>
        <NavBoom onSearch={handleSearch}></NavBoom>
      </div>
      {term?
        (
          <div className="affiche-produit">
            <div className=" container block-produit">
              {filtred?.map((el) => (
                <div className="col-4">
                  <Link to={`/detail/${el?._id}`}>
                    <div className="produit">
                      <div className="img-produit" style={{ backgroundImage:`url(${el?.img})`, backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                      <div className="prod-nom">{el?.nomproduit} </div>
                      <div className="prod-prix">{el.prix} TND</div>
                      <div>
                        {" "}
                        <ReactStars
                          count={5}
                          value={el.rating}
                          isHalf={true}
                        ></ReactStars>
                      </div>
                      <button className="btn-produit">
                        {" "}
                        Ajouter au panier{" "}
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ):null}

      <div className="affiche-produit">
        <Affiche data={datageniral}></Affiche>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
