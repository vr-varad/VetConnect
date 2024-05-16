import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import {useSelector} from 'react-redux'
import Spinner from './components/Spinner.jsx'
import './App.css'

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
      </Routes>)}
    </BrowserRouter>
    </>
  );
}

export default App;
