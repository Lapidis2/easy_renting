import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
     <Router>
      <NavBar />
      <Routes>
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



      </Routes>
     </Router>
     <Homepage />
	<Footer />
    </>
  )
}

export default App
