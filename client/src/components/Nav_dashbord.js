import React from 'react'
import '../css/Dasbord.css'
import { Link } from 'react-router-dom'

const Nav_dashbord = () => {
  return (
    <div>
      <div className='nav_dashbord'>
       <Link to={'/dashbord'}> <div className='admin_img'><div className='sous_tt'>Admin</div></div></Link>
       
        <div>
            <ul className='menu_list_dash'>
              <Link to={'/user_dash'}> <li>Users</li></Link>
               <Link to={'/produit-dash'}> <li>Produits</li></Link>
               <Link to={'/commande-dash'}> <li>Commades</li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav_dashbord
