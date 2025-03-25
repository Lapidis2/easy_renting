import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './pages/Homepage'
import PropertyDetail from './pages/PropertyDetail';
import './App.css'

function App() {

  return (
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
		     <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
	  <Footer />
     </Router>
  )
}

export default App
