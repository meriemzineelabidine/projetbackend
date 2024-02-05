import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { userCurrent } from "../Js/SliceUser/Sliceuser";
import { addcommande } from "../Js/CommandeSlice";
import { getbyidproduct } from "../Js/SliceProduit/SliceProduit";

const Detail = () => {
  const isAuth = localStorage.getItem("token");
  const user=useSelector((state)=>state.user.user);
  const products=useSelector((state)=>state.produit.produit)
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
const params=useParams()
const product=products?.filter((el)=>el._id==params.id)[0];
console.log(product)

  const [quantite, setquantite] = useState("");
//*********************************************** */
  const [newcommande, setnewcommande] = useState({
    iduser: user?._id,
    nameuser: user?.name,
    nameprod: product?.nomproduit,
    quantite: 1,
    price: product?.prix,
    status: "en cours",
  });
  console.log(newcommande)


  return (
    <div>
      <div className="description container">
        <img src={product.img} className="img-description"></img>
        <div>
          <div className="txt-detail">{product.nomProduit}</div>
          <div>{product.marque}</div>
        </div>
      </div>
      <div>
        quantite:
        <input type="number" onChange={(e) => setnewcommande({...newcommande,quantite:e.target.value})} />
        <button onClick={(e)=>dispatch(addcommande(newcommande))}>Acheter</button>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default Detail;
