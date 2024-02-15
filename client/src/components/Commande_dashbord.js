import React, { useEffect, useState } from 'react'
import Nav_dashbord from './Nav_dashbord'
import { useDispatch, useSelector } from "react-redux";
import { getcommande } from '../Js/CommandeSlice';

const Commande_dashbord = () => {
  const [satus, setsatus] = useState("transfere");
  const [color, setcolor] = useState('red')
  const [payement, setpayement] = useState('non payé')
  const [color2, setcolor2] = useState("red")
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getcommande());
      
    }, [])
    const commandes=useSelector((store)=>store.commande?.commande)
    console.log("voila",commandes)
    const multy=(x,y)=>{
      var result=parseFloat(x)*parseFloat(y)
      return result
    }
  return (
    <div>
      <div>
        <Nav_dashbord></Nav_dashbord>
      </div>
      <div className='container table_dash'>
        <div className='titre_tableau'>Total Commandes</div>
        <table>
            <tr>
                <th className='colone'>N°Commande</th>
                <th className='colone'>Name User</th>
                <th className='colone'>Name Produit</th>
                <th className='colone'>Quantite</th>
                <th className='colone'>Price</th>
                <th className='colone'>Commande Status</th>
                <th className='colone'>Payement Status</th>
            </tr>
            {commandes?.map((el,i)=>(<>
           
            
            <tr>
                <td className='colone'>{i+1}</td>
                <td className='colone'>{el?.nameuser}</td>
                <td className='colone'>{el?.nameprod}</td>
                <td className='colone'>{el?.quantite}</td>
                <td className='colone'>{multy((el?.price),(el?.quantite))} TND</td>
                <td className='colone'><button style={{backgroundColor:`${color}`} }  className="btn_commande" onClick={()=>(setsatus("en cours"),setcolor("green"))}>{satus}</button></td>
                <td className='colone'> <button  style={{backgroundColor:`${color2}`}} className="btn_commande" onClick={()=>(setpayement("paye"),setcolor2("green"))}>{payement}</button></td>
            </tr></>))}
        </table>
      </div>
      
    </div>
  )
}

export default Commande_dashbord
