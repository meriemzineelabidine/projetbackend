import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { userCurrent } from "../Js/SliceUser/Sliceuser";
import { addcommande } from "../Js/CommandeSlice";
import NavBoom from "./NavBoom";


const Detail = () => {
      // const [quantite, setquantite] = useState(1)
    // const incrementeState = ()=>{
    //     setquantite(quantite+1)

    // }
    // const decrementeState = ()=>{
    //     setquantite((prevEtat) => (prevEtat > 0 ? prevEtat - 1 : 0))

    // }
  const isAuth = localStorage.getItem("token");
  const user=useSelector((state)=>state.user.user);
  const products=useSelector((state)=>state.produit.produit)
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
const params=useParams()
const product=products?.filter((el)=>el._id==params.id)[0];
console.log("produit",product)

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
    <div className="page_detail">
      <div><NavBoom></NavBoom></div>
      <div className="description container">
        <div className="partie_img" style={{ backgroundImage:`url(${product?.img})`, backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}>
       
       </div>
        <div className="partie_detail_produit">
          <div className="border_title">
          <div className="txt-detail">{product?.nomproduit}</div>
          <div className="txt-marque">marque : {product?.marque}</div></div>
          <div className="style_prix">{product?.prix} TND </div>
          <div className="border_title" style={{color:"gray",fontSize:"10px"}}>disponible avec livraison</div>
        Quantite:
        <input type="number"  className="input_quantite" onChange={(e) => setnewcommande({...newcommande,quantite:e.target.value})} />
        <button className="btn_acheter"  onClick={(e)=>(dispatch(addcommande(newcommande),navigate('/pannier')))}>Acheter</button>
      
        </div>
      </div>
      <div className="container detail">
        <div className="txt_description">Detail</div>
      <div className="descrep">{product?.description}</div>
      </div>
    </div>
  );
};

export default Detail;
