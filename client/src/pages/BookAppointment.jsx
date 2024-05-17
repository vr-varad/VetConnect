import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
const BookAppointment = () => {
  const {user} = useSelector(state=>state.user)
  console.log(user)
  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default BookAppointment