import React, { useEffect, useState } from "react";
import "../css/Pannier.css";
import NavBoom from "./NavBoom";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deletecommande, getcommande } from "../Js/CommandeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userCurrent } from "../Js/SliceUser/Sliceuser";

const Pannier = () => {
  const navigate = useNavigate()
  const [achat, setachat] = useState()
    // const [inputquantite, setinputquantite] = useState(1)
    // const incrementeState = ()=>{
    //     setinputquantite(inputquantite+1)

    // }
    // const decrementeState = ()=>{
    //     setinputquantite((prevEtat) => (prevEtat > 0 ? prevEtat - 1 : 0))

    // }




    // shjfhdfg
    const dispatch=useDispatch()
    const [ping, setping] = useState(false)
    useEffect(() => {
      dispatch(getcommande());
    }, [ping]);
 

    
    const commandes=useSelector((store)=>store.commande?.commande)
    const user=useSelector((store)=>store.user?.user)
const commanseuser=commandes?.filter((el)=>el?.iduser==user?._id)


console.log(commanseuser)
const prix = commanseuser?.map((el)=>el?.price)
const quantite = commanseuser?.map((el)=>el?.quantite)

console.log("hahouprix",prix)

console.log("hahouquantite",quantite)
const calculPrixTotal=()=>{
  
const total= prix?.map((value,index)=>parseFloat(value)*quantite[index]);
var somme = 0;
for(let i=0;i<total?.length;i++)
{
   somme =somme+(total[i]);
}
  return somme; 
}
  return (
    <div>
      <div>
        <NavBoom></NavBoom>
      </div>

      <div className="achat"><button className="bouton_achat" onClick={()=>navigate('/')}>Achat</button></div>
      <div className="block container">
      <div className="contenu container">
      {commanseuser?.map((el,i)=>(
        <div className="partie1">
          <div className="title-p1">pannier {i+1}</div>
          <div className="commande">
            <div>{el?.nameprod}</div>
            <div>{el?.price}</div>
          </div>
        
          <div className="partie2">
            <div className="bouton_supprimer" onClick={()=>dispatch((deletecommande(el?._id)),(setping(!ping)))}>
              <div className="icon_supprimer"><FontAwesomeIcon icon={faTrash} /></div><div>Supprimer</div>
            </div>
            <div className="quantite">
              {" "}
             <div className="contenur-icon"> <FontAwesomeIcon icon={faPlus} /></div>
              <div><input type="txt" className="input_quant" value={el?.quantite}></input></div>
              <div className="contenur-icon"> <FontAwesomeIcon icon={faMinus} /></div>
            </div>
          </div>
        </div>
          ))}
      </div>
      {commanseuser?.length!=0?(<>
        <div className="resume_pannier">
          <div className="title">Resume pannier</div>
          <div className="Total_prix">
            <div>PrixTotal</div>
            <div>{calculPrixTotal()} TND</div>
          </div>
          <div className="sous-titre">Frais de livraison non inclus à ce stade</div>
          <div className="boutton_commander" onClick={()=>alert(" votre commande est ajoutée avec succes")}> COMMANDER {calculPrixTotal()} TND</div>
        </div></>):null}
      

      </div>
      
    </div>
  );
};

export default Pannier;
