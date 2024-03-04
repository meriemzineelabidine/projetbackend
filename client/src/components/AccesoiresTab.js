import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../Js/SliceProduit/SliceProduit";
import NavBoom from "./NavBoom";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "../css/TelTablette.css";
import Footer from './Footer';

const AccesoiresTab = () =>  {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getproduct());
    }, []);
    const produitlist = useSelector((store) => store.produit?.produit);
    const [valuesearch, setvaluesearch] = useState("");
  
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
    return (
      <div>
        <div>
          <NavBoom onSearch={handleSearch}></NavBoom>
          <div>
            <div className="container block-produit">
              {valuesearch
                ? produitsFiltres?.map((el) => (
                    <div className="col-3">
                      <Link to={`/detail/${el?._id}`}>
                        <div className="produit">
                          <div
                            className="img-produit"
                            style={{
                              backgroundImage: `url(${el?.img})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
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
                          <button className="btn-produit">
                            {" "}
                            Ajouter au panier{" "}
                          </button>
                        </div>
                      </Link>
                    </div>
                  ))
                : produitlist
                    ?.filter((e) => e.produit == "accessoires tablettes")
                    .map((el) => (
                      <div className="col-3">
                        <Link to={`/detail/${el?._id}`}>
                          <div className="produit">
                            <div
                              className="img-produit"
                              style={{
                                backgroundImage: `url(${el?.img})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
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
        </div>
        <div><Footer></Footer></div>
      </div>
    );
  };

export default AccesoiresTab
