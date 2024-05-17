import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner.jsx'
import './App.css'
import BookAppointment from './pages/BookAppointment.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Profile from './redux/Profile.jsx'

function App() {
  const {loading} = useSelector(state=>state.alert)
  return (
    <>
    <BrowserRouter>
    {loading?<Spinner />:
      (<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<ProtectedRoute><BookAppointment/></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>

      </Routes>)}
    </BrowserRouter>
    </>
  );
}

export default App;
