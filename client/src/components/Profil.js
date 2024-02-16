
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout,userCurrent } from "../Js/SliceUser/Sliceuser";
import { updateuser } from "../Js/SliceUser/List_user";
import NavBoom from "./NavBoom";
import '../css/Profile.css'
import { getcommande } from "../Js/CommandeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Profil = () => {
    const isAuth = localStorage.getItem("token");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [apparition, setapparition] = useState(false)
    const [updateemail, setupdateemail] = useState({
      name:"",
      lastname:"",
      email:"",
      password:""
    })
    useEffect(() => {
      if (isAuth) {
        dispatch(userCurrent());
      }
    }, []);
    useEffect(() => {
      dispatch(getcommande());
    }, [])
    const user = useSelector((state) => state.user?.user);
    console.log("hahou",user)
    const commandes=useSelector((store)=>store.commande?.commande)
    const commanseuser=commandes?.filter((el)=>el?.iduser==user?._id)
    const multiplay=(x,y)=>{
      var total= parseFloat(x)*parseFloat(y)
      return total
    }
    
  return (
    <div>
      <div>
       <NavBoom></NavBoom>
      </div> 
      
      <div className="bienvenue">
      <h1> Bienvenue {user ? user.name : <h1>loading...</h1>}</h1>
    </div>
      <div className="compte_position">
        <div className="box_profile">
          <div className="profile_img">
            <div className="user_img"><img src={user?.img} className="img_personel"></img></div>
            <div className="name_user">{user?.name}  {user?.lastname}</div>
            <div><button onClick={()=>(dispatch(logout()),navigate('/'))}>se déconnecter</button></div>
          </div>
          <div className="profile_information">
            <div className="informations container">
            <div className="title_info">Informations</div>
            <div className="style_email">Email : {user?.email}
            
            <FontAwesomeIcon icon={faPenToSquare} className="icon_update_email" onClick={()=>(setapparition(!apparition),setupdateemail(user))}/>
            {apparition?(<><input type="text"onChange={(e)=>setupdateemail({...updateemail , email:e.target.value})}></input><button onClick={()=>dispatch(updateuser({id:user?._id,infouser:updateemail}))}>modifier</button></>):null}
            
            
            </div>
              
           
            </div>
            <div className="listes_commandes_user container">
              <div className="title_commande"> Vos Commandes ({commanseuser?.length})</div>
              <div>
                {commanseuser?.map((el,i)=>(
                  
                <div className="info_com">

                  <div className="style_txt_com">{i+1} : {el?.nameprod}</div>
                  <div className="style_txt_com">{el?.quantite}</div>
                  <div className="style_txt_com"> {multiplay((el?.price),(el?.quantite))} TND</div>
                  </div>
                  
                ))}
                
                </div>
            </div>
          </div>

        </div>

      </div>
      <div></div>
      
      
    </div>
  )
}

export default Profil
