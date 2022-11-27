import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/antd.css';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import Reservations from  './pages/Reservations';

import Search from './pages/Search';
import Demo from './pages/Demo';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AdminHome from './pages/AdminHome';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/booking/:carid" element={<BookingCar/>} />
        <Route exact path="/addcar" element={<AddCar/>} />
        <Route exact path="/admin" element={<AdminHome/>} />
        <Route exact path="/editcar/:carid" element={<EditCar/>} />
        <Route exact path="/reservations" element={<Reservations/>} />
        <Route exact path="/adminregister" element={<AdminRegister/>} />
        <Route exact path="/adminlogin" element={<AdminLogin/>} />
        
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/demo" element={<Demo/>} />
        </Routes>
      </Router>
       
    </div>
  );
}


export default App;


