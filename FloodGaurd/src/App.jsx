import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Sos from './components/Sos.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import Floodmap from './pages/Floodmap.jsx'
import MissingPerson from './pages/MissingPerson.jsx'
import SearchMissing from './pages/SearchMissing.jsx'

function App() {
  
  return (
    <>
    <Sos/>
    <Router>
    <Header />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/Floodmap" element={<Floodmap/>} />
                <Route path="/MissingPerson" element={<MissingPerson/>} />
                <Route path="/SearchMissing" element={<SearchMissing/>} />
            </Routes>
    </Router>
    </>
  )
}

export default App
