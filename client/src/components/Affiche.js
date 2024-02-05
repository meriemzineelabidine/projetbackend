import React, { useState } from 'react'
import '../css/Affiche.css'
import { Link } from 'react-router-dom';


const Affiche = ({data}) => {
  return (
    <div className='affiche container'>
    {data.map((el)=>(<div className='col-4'>
      <div className='bg'>
        <Link to={el.path}>
        <div className='box'>
     <img src={el.img} className='img-article'></img>
    <h5>{el.title}</h5>
    </div></Link></div>
    </div>))}
    </div>
    
  

    
  )
}

export default Affiche;
