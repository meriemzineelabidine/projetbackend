import React, { useState } from 'react'
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBoom from './NavBoom';
import Affiche from './Affiche';
import Articles from './Articles'



const Home = () => {
  const [datageniral, setdatageniral] =  useState(Articles)
  return (
    <div>
        <div>
           <NavBoom></NavBoom>
           
           
        </div>
        <div className='affiche-produit' >
        <Affiche data={datageniral} ></Affiche>
        </div>




 </div>
 
  )
}

export default Home
