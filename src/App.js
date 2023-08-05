import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import More from './components/More';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <div>
       <Navbar/>      
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/more" element={<More />}></Route>
        </Routes>
        <Footer/>
      </div>


    </>
  )
}

export default App