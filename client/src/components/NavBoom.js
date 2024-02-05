
import React from 'react';
import Hamburger from 'hamburger-react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/NavBoom.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const NavBoom = () => {

  const [show, setshow] = useState(false)
  return (
   <div >
    <div className='bar-menu'>
    <div className='container menu'>
     <div className='menu-berger'> 
    <Hamburger size={40}  onToggle={()=>setshow(!show)}/>

    {show ? <div className='list-menu'> 
      <ul className='list-link'>
        <Link to={'/telettablette'}><li className='link1'>Télephone && Tablette
        <div className='sous-menu1'>
          <ul className='téléphone-portable'> 
          <Link to={'/tel'}><li>Téléphone Portable
          <ul>
            <Link to={'/smartphone'}><li>smartphone</li></Link>
            <Link to={'/basic'}><li>téléphone Basic</li></Link></ul></li></Link>
          <Link to={'/tablette'}><li>Tablette
            <ul>
              <Link to={'/tabletteedu'}><li>Tablettes Educative</li></Link>
              <Link to={'/accessoiretab'}><li> AccessoiresTablettes</li></Link></ul></li></Link>
          <Link to={'/accesoiretel'}><li>Accesoire téléphonique
            <ul>
              <Link to={'/Casque et ecouteurs'}><li>Casques et ecouteurs</li></Link>
              <Link to={'/pourselfie'}><li>Accessoires pour selfie</li></Link>
              <Link to={'/pourvoiture'}><li>Accessoires pour voiture</li></Link></ul></li></Link></ul></div></li></Link>
        <Link ><li className='link2'>Cuisine && Eléctroménager
        <div className='sous-menu2'>
          <ul className='téléphone-portable'> 
          <Link><li>Electroménager
          <ul>
            <Link><li>Blaanders</li></Link>
            <Link><li>friteuses</li></Link>
            <Link><li>cafitiére</li></Link></ul></li></Link>
          <Link><li>Cuisine
            <ul>
              <Link><li>casserole</li></Link>
              <Link><li>Vaisselles</li></Link>
              <Link><li> cockotte-minutes</li></Link></ul></li></Link>
          <Link><li>Gros Electroménager
            <ul>
              <Link><li>Hautes</li></Link>
              <Link><li>Réfrigérateurs</li></Link>
              <Link><li>Congélateurs</li></Link>
              <Link><li>Lave-vaisselle</li></Link></ul></li></Link></ul></div></li></Link>
        <Link ><li className='link3'> Santé && Beauté
        <div className='sous-menu3'>
          <ul className='téléphone-portable'> 
          <Link><li>Soins personnelle
          <ul>
            <Link><li>Soins de visage</li></Link>
            <Link><li>soins des cheuveux</li></Link></ul></li></Link>
          <Link><li>Maquillage
            <ul>
              <Link><li>Visage</li></Link>
              <Link><li>Mquillage des yeux</li></Link>
              <Link><li> Rouge à lévres</li></Link>
              <Link><li> vernie</li></Link></ul></li></Link>
          <Link><li>Les Essentielles
            <ul>
              <Link><li> Bain && Gel douche</li></Link>
              <Link><li>protection solaire</li></Link>
              <Link><li>Colorations cheuveux</li></Link></ul></li></Link></ul></div></li></Link>
        <Link ><li className='link4'>Modes
        <div className='sous-menu4'>
          <ul className='téléphone-portable'> 
          <Link><li> Femmes
          <ul>
            <Link><li>chaussures</li></Link>
            <Link><li>Vétement</li></Link>
            <Link><li>Accessoires</li></Link></ul></li></Link>
          <Link><li>Homme
            <ul>
              <Link><li>chaussures</li></Link>
              <Link><li>Vétement</li></Link>
              <Link><li> Accessoires</li></Link></ul></li></Link>
          <Link><li>Enfant
            <ul>
              <Link><li>Garsons</li></Link>
              <Link><li>Fille</li></Link>
              </ul></li></Link></ul></div></li></Link>
        
      </ul>
    </div>:null}
  
 
    </div>
    <div>
      <img src='../images/logo.png' className="logo"></img>
    </div>
    <div className='bar-recherche'>
      <input  className='input-recherche' type='text' placeholder='chercher un produit,une marque ou une catégorie'></input>
      <button className='bouton-recherche'>Rechercher</button>
    </div>
    <div className='cnx'>
    <FontAwesomeIcon icon={faUser} className='icon-profile' />
     <Link to={'/register'}>Se Connecter</Link>
    </div>
    <div  className='cnx'>
    <FontAwesomeIcon icon= {faQuestion} className='icon-profile'/>
    <select className='select-cnx'>
      <option>Aide</option>
    </select>
    </div>
    <div className='cnx'>
    <FontAwesomeIcon icon= {faCartShopping} className='icon-profile' />
    <p className='m-t'> Pannier</p>
    </div>
    </div>
    </div>

  </div> 
  );
}

export default NavBoom;
