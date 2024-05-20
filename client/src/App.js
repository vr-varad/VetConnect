import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/userPages/Register'
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner.jsx'
import './App.css'
import BookAppointment from './pages/BookAppointment.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import DoctorRegister from './pages/doctorPages/DoctorRegister.jsx'
import userProfile from './pages/userPages/userProfile.jsx'

function App() {
  const {loading} = useSelector(state=>state.alert)
  return (
    <>
    <BrowserRouter>
    {loading?<Spinner />:
      (<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctoRegister" element={<DoctorRegister/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<ProtectedRoute><BookAppointment/></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><userProfile/></ProtectedRoute>}/>

      </Routes>)}
    </BrowserRouter>
    </>
  );
}

export default App;
