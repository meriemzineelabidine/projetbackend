import React, { useEffect } from 'react'
import'../css/Dasbord.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Nav_dashbord from './Nav_dashbord'
import { useDispatch, useSelector } from 'react-redux'
import { getcommande } from '../Js/CommandeSlice'
import { getproduct } from '../Js/SliceProduit/SliceProduit'
import { getuser } from '../Js/SliceUser/List_user'


const Dashbord = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getcommande());
    
  }, [])
  useEffect(() => {
   dispatch(getproduct())
    
  }, [])
  useEffect(() => {
    dispatch(getuser())
     
   }, [])


 

  const produits=useSelector((store)=>store.produit?.produit)
  const commandes=useSelector((store)=>store.commande?.commande)
  const listuser=useSelector((store)=>store.listuser?.listuser)

  return (
    <div>
      <div>
        <Nav_dashbord></Nav_dashbord>
      </div>
      
      <div className='position_contenu container'>
      <div className='contenu_dash'>
        <Link to={'/user_dash'}><div className='box_dash'><FontAwesomeIcon icon={faUserFriends} />Total Users({listuser?.length})</div></Link>
        <Link to={'/produit-dash'}><div className='box_dash'><FontAwesomeIcon icon= {faBars}/>Total Produits ({produits?.length})</div></Link>
        <Link to={'/commande-dash'}><div className='box_dash'><FontAwesomeIcon icon={faBagShopping}  /> Total Commandes ({commandes?.length})</div></Link>
      </div></div>
      
    </div>
  )
}

export default Dashbord


