import React from 'react'
import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({children}) => {
  try {
    if(localStorage.getItem('token')){
      console.log(1)
      return children
    }else{
      console.log(2)
      localStorage.removeItem('token')
      return <Navigate to={'/login'}/>
    }
  } catch (error) {
    console.log(3)
    localStorage.removeItem('token')
    return <Navigate to={'/login'}/>
  }
}

export default ProtectedRoute