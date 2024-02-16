import React, { useEffect, useState } from 'react'
import Nav_dashbord from './Nav_dashbord'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from '../Js/SliceUser/List_user'

const User_dash = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getuser())
    }, [])
  const users = useSelector((store)=>store.listuser?.listuser)
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
       {users? users?.map((el,i)=>(
            <tr>
              <td className='colone'>{i+1}</td>
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
