import React, { useEffect } from 'react'
import NavBoom from './NavBoom'
import '../css/TelTablette.css'
import { useState } from 'react'
import ArticlesTabTel from './ArticlesTel&&Tab'
import { Link } from 'react-router-dom'
import DataTelTab from './DataCompletTel&&Tab'
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../Js/SliceProduit/SliceProduit'

const TelTablette = () => {
  const dispatch=useDispatch()
const [Articles, setArticles] = useState(ArticlesTabTel)

useEffect(() => {
  dispatch(getproduct())
   }, [])
   const produitlist=useSelector((store)=>store.produit?.produit)
   console.log("hahi list",produitlist)
 
  return (
    <div>
     <div>
      <NavBoom></NavBoom>
      </div>
      <div className='block-article container'>
          <div>
            <div>
            {Articles.map((el)=>(<div className='card'>
            <Link to={el.path}>
              <div className='details'>
             
              <img className='img-art' src={el.img}></img>
              <div style={{fontWeight:"bold"}}>{el.tittre}</div>
              
              </div></Link>
            </div>))}
            </div>
            
          </div>
      </div>
      <div className='container block-produit'>
        {produitlist?.map((el)=>(<div className='col-4'>
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
  )
}

export default TelTablette
