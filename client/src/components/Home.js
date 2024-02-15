import React, { useState } from 'react'
import '../css/Home.css'
import NavBoom from './NavBoom';
import Affiche from './Affiche';
import Articles from './Articles'
import Footer from './Footer';



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
        <div>
         <Footer></Footer>
        </div>
 </div>
 
  )
}

export default Home
