import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body bg-dark text-light py-4">
    <h5 class="card-title">Made By Ayush Pathak😊</h5>
    <p class="card-text">Don't copy any content from this website</p>
    <NavLink to="/"><button className="btn btn-primary">Home Page</button></NavLink>
  </div>  
</div>
    
    </>
  )
}

export default Footer