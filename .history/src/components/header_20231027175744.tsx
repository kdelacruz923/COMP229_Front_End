import React from 'react';
import { NavLink } from 'react-router-dom';

function Header()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink to={"/"} className="navbar-brand" href="/"><i className="fa-solid fa-link fa-lg"></i> Online Market Application</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink  to={"/"} className="nav-link <%= (page == 'home') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-house-signal fa-lg"></i> Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink  to={"/"} className="nav-link <%= (page == 'about') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-circle-info fa-lg"></i> About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink  to={"/"} className="nav-link <%= (page == 'projects') ? 'active' : ''; %>" aria-current="page" ><i className="fa-solid fa-diagram-project fa-lg"></i> Projects</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"/"} className="nav-link <%= (page == 'services') ? 'active' : ''; %>" aria-current="page" ><i className="fa-solid fa-signs-post fa-lg"></i> Services</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"/"} className="nav-link <%= (page == 'contact') ? 'active' : ''; %>" aria-current="page" href="/contact"><i className="fa-solid fa-envelopes-bulk fa-lg"></i> Contact</NavLink>
          </li>
   
          
        </ul>
      </div>
    </div>
  </nav>

    )
}

export default Header;