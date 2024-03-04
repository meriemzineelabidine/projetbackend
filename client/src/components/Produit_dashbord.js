import React, { useEffect, useState } from "react";
import Nav_dashbord from "./Nav_dashbord";
import { useDispatch, useSelector } from "react-redux";
import { addproduit, deleteproduit, getproduct, updateproduit } from "../Js/SliceProduit/SliceProduit";


const Produit_dashbord = () => {
  const [show, setshow] = useState(false);
  const [ajout, setajout] = useState(false);
  const [newproduit, setnewproduit] = useState({
    categorie: "",
    produit: "",
    nomproduit: "",
    img: "",
    marque: "",
    description: "",
    prix: "",
    rating:""
  });
  const [upproduit, setupproduit] = useState({
    categorie: "",
    produit: "",
    nomproduit: "",
    img: "",
    marque: "",
    description: "",
    prix: "",
  });
  const [ping, setping] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproduct());
  }, [ping]);
  
  
  
  const produits = useSelector((store) => store.produit?.produit);
  console.log("voilaproduit", produits);
const [activeelement, setactiveelement] = useState()
const handlemodifyclick=(elementid)=>{
  setactiveelement(elementid)
}
  return (
    <div>
      <div>
        <Nav_dashbord></Nav_dashbord>
      </div>
      <div className=" container pos_btn_ajout">
      <button className="btn_ajout_produit" onClick={() => setajout(!ajout)}>
          Ajouté un Produit
        </button></div>
        {ajout ? (
          <div className="postion_block">
          <div className=" container block_ajout">
            <input type="text" placeholder="categorie" onChange={(e)=>setnewproduit({...newproduit,categorie:e.target.value})}></input>
            <input type="text" placeholder="produit" onChange={(e)=>setnewproduit({...newproduit,produit:e.target.value})}></input>
            <input type="text" placeholder="nomproduit" onChange={(e)=>setnewproduit({...newproduit,nomproduit:e.target.value})}></input>
            <input type="text" placeholder="marque" onChange={(e)=>setnewproduit({...newproduit,marque:e.target.value})}></input>
            <input type="text" placeholder="img" onChange={(e)=>setnewproduit({...newproduit,img:e.target.value})}></input>
            <input type="text" placeholder="prix" onChange={(e)=>setnewproduit({...newproduit,prix:e.target.value})}></input>
            <input type="text" placeholder="description" onChange={(e)=>setnewproduit({...newproduit,description:e.target.value})}></input>
            <input type="text" placeholder="rating" onChange={(e)=>setnewproduit({...newproduit,rating:e.target.value})}></input>

            <button className="btn_ajout_produit" onClick={()=>( dispatch(addproduit(newproduit)),setping(!ping))}>Confirmer</button>
          </div></div>
        ) : null}


      <div className="container table_dash">
        <div className="titre_tableau">Total Produits</div>

        <table>
          <tr>
            <th className="colone">N°Produit</th>
            <th className="colone">Categorie</th>
            <th className="colone">Produit</th>
            <th className="colone">Nom Produit</th>
            <th className="colone">Prix</th>
            <th className="colone">Action</th>
          </tr>
          {produits?.map((el, i) => (
            <>
              <tr key={el}>
                <td className="colone">{i + 1}</td>
                <td className="colone">{el?.categorie}</td>
                <td className="colone">{el?.produit}</td>
                <td className="colone">{el?.nomproduit}</td>
                <td className="colone">{el?.prix} TND</td>
                <td>
                  <button className="btn_dash_supp" onClick={()=>(dispatch(deleteproduit(el?._id)),setping(!ping))}>supprimer</button>
                  <button
                    className="btn_dash_modif"
                    onClick={() => (setshow(!show),handlemodifyclick(el),setupproduit(el))}
                  >
                    Modifier
                  </button>
                  {show && activeelement==el ? (
                    <div className="position_modif">
                      <div className="modif">
                        <input type="text" placeholder="categorie" onChange={(e)=>setupproduit({...upproduit,categorie:e.target.value})} ></input>
                        <input type="text" placeholder="produit" onChange={(e)=>setupproduit({...upproduit,produit:e.target.value})} ></input>
                        <input type="text" placeholder="nom_produit" onChange={(e)=>setupproduit({...upproduit,nomproduit:e.target.value})} ></input>
                        <input type="text" placeholder="img" onChange={(e)=>setupproduit({...upproduit,img:e.target.value})}></input>
                        <input type="text" placeholder="description" onChange={(e)=>setupproduit({...upproduit,description:e.target.value})}></input>
                        <input type="text" placeholder="prix" onChange={(e)=>setupproduit({...upproduit,prix:e.target.value})}></input>
                        <input type="text" placeholder="marque" onChange={(e)=>setupproduit({...upproduit,marque:e.target.value})}></input>
                        <button className="btn_modif_produit" onClick={()=>(dispatch((updateproduit({id:el?._id,updateproduit:upproduit}))),setping(!ping))} >valider</button>
                      </div>
                    </div>
                  ) : null}
                </td>
              </tr>
            </>
          ))}
        </table>
       
        
      </div>
     
    </div>
  );
};

export default Produit_dashbord;
