import React from 'react'
import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({children}) => {
  try {
    if(localStorage.getItem('token')){
      return children
    }else{
      localStorage.removeItem('token')
      return <Navigate to={'/login'}/>
    }
  } catch (error) {
    localStorage.removeItem('token')
    return <Navigate to={'/login'}/>
  }
}

export default ProtectedRoute