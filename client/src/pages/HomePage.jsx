import React, { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'

const HomePage = () => {
  const getUserData = async () => {
    try {
      const token = localStorage.getItem('token')
      await axios.get('/api/v1/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      
    }
    
  }
  useEffect(() => {
    getUserData()
  },[])
  return (
    <>
    <Navbar/>
    <Body/>
    <Footer/>
    </>
  )
}

export default HomePage