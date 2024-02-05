
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../Js/SliceProduit/SliceProduit'
import NavBoom from './NavBoom'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const Tablette = () => {
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getproduct())
       }, [])
       const produitlist=useSelector((store)=>store.produit?.produit)
  return (
    <div>
    <div>
      <NavBoom></NavBoom>
      <div>
      <div className='container block-produit'>
      {produitlist?.filter((e)=>(e.categorie=="tablette")).map((el)=>(<div className='col-4'>
        <Link to={`/detail/${el?._id}`}>
        <div className='produit'>
        <img className="img-produit"src={el?.img}></img>
        <div className='prod-nom'>{el?.nomproduit} </div>
        <div>{el.prix}</div>
        <div> <ReactStars
         count={5}
         value={el.rating}
         isHalf={true}></ReactStars></div>
        <button className='btn-produit'> Ajouter au panier </button> 
        </div></Link>

      </div>))}
    </div>
      </div>
    </div>
  </div>
  )
}

export default Tablette
