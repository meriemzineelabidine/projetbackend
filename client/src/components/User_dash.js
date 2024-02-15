import React, { useEffect, useState } from 'react'
import Nav_dashbord from './Nav_dashbord'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from '../Js/SliceUser/Sliceuser'

const User_dash = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getuser())
    }, [])

  const usersss = useSelector((store)=>store.user?.user)
 const [users, setusers] = useState([usersss])

 
  
  return (
    <div>
      <div>
        <Nav_dashbord></Nav_dashbord>
      </div>
      <div className='container table_dash'>
        <div className='titre_tableau'>Total Users</div>
        <table>
          
            <tr>
                <th className='colone'>N°User</th>
                <th className='colone'>Name</th>
                <th className='colone'>Lastname</th>
                <th className='colone'>Email</th>
            </tr>
       {users? users?.map((el)=>(
            <tr>
              <td className='colone'></td>
              <td className='colone'>{el?.name}</td>
              <td className='colone'>{el?.lastname}</td>
              <td className='colone'>{el?.email}</td>
          </tr>
           )):"null"}
        </table>
      </div>
    </div>
  )
}

export default User_dash
