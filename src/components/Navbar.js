import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <NavLink to="/"> */}
      <img src="../images/dices.png" alt="logo" />
      {/* </NavLink> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <NavLink activeClassName="active" exact to="/">
      <li className="nav-item nav-link ">Home        
      </li>
      </NavLink>
      <NavLink activeClassName="active" exact to="/about">
      <li className="nav-item nav-link ">About        
      </li>
      </NavLink>
      <NavLink activeClassName="active" exact to="/contact">
      <li className="nav-item nav-link ">Contact       
      </li>
      </NavLink>
      <NavLink activeClassName="active" exact to="/more">
      <li className="nav-item nav-link ">More     
      </li>
      </NavLink>
    
      
    </ul>
    <form className="d-flex serarch">
      <input className="form-control me-2 serarch" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success " type="submit">Search</button>
    </form>
  </div>
</nav>
</>
  )
}

export default Navbar