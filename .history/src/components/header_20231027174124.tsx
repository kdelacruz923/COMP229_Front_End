import React from 'react';

function Header()
{
    return(
        <nav classNameNameName="navbar navbar-expand-lg navbar-dark bg-dark">
    <div classNameName="container-fluid">
      <a classNameName="navbar-brand" href="/"><i classNameName="fa-solid fa-link fa-lg"></i> Online Market Application</a>
      <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classNameName="navbar-toggler-icon"></span>
      </button>
      <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0">
          <li classNameName="nav-item">
            <a classNameName="nav-link <%= (page == 'home') ? 'active' : ''; %>" aria-current="page" href="/home"><i classNameName="fa-solid fa-house-signal fa-lg"></i> Home</a>
          </li>
<!--
          <li classNameName="nav-item">
            <a classNameName="nav-link <%= (page == 'about') ? 'active' : ''; %>" aria-current="page" href="/about"><i classNameName="fa-solid fa-circle-info fa-lg"></i> About</a>
          </li>

          <li classNameName="nav-item">
            <a classNameName="nav-link <%= (page == 'projects') ? 'active' : ''; %>" aria-current="page" href="/projects"><i classNameName="fa-solid fa-diagram-project fa-lg"></i> Projects</a>
          </li>

          <li classNameName="nav-item">
            <a classNameName="nav-link <%= (page == 'services') ? 'active' : ''; %>" aria-current="page" href="/services"><i classNameName="fa-solid fa-signs-post fa-lg"></i> Services</a>
          </li>
-->
          <li classNameName="nav-item">
            <a classNameName="nav-link <%= (page == 'contact') ? 'active' : ''; %>" aria-current="page" href="/contact"><i classNameName="fa-solid fa-envelopes-bulk fa-lg"></i> Contact</a>
          </li>

          <% if(displayName) { %>

            <li classNameName="nav-item">
              <a classNameName="nav-link <%= (page == 'product-list') ? 'active' : ''; %>" aria-current="page" href="/product-list"><i classNameName="fa-solid fa-table-list fa-lg"></i> Product List</a>
            </li>

             <li classNameName="nav-item">
              <a classNameName="nav-link <%= (page == 'movie-list') ? 'active' : ''; %>" aria-current="page" href="/categories-list"><i classNameName="fa-solid fa-table-list fa-lg"></i> Category List</a>
            </li>

            <li classNameName="nav-item">
              <a classNameName="nav-link" aria-current="page" href="/logout"><i classNameName="fa-solid fa-right-from-bracket fa-lg"></i> Logout</a>
            </li>

          <% } else { %>

          <li classNameNameName="nav-item">
            <a classNameNameName="nav-link <%= (page == 'login') ? 'active' : ''; %>" aria-current="page" href="/login"><i classNameNameName="fa-solid fa-right-to-bracket fa-lg"></i> Login</a>
          </li>

          <% } %>
          
        </ul>
      </div>
    </div>
  </nav>

    )
}

export default Header;