import React from 'react';

function Header()
{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><i class="fa-solid fa-link fa-lg"></i> Online Market Application</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link <%= (page == 'home') ? 'active' : ''; %>" aria-current="page" href="/home"><i class="fa-solid fa-house-signal fa-lg"></i> Home</a>
          </li>
<!--
          <li class="nav-item">
            <a class="nav-link <%= (page == 'about') ? 'active' : ''; %>" aria-current="page" href="/about"><i class="fa-solid fa-circle-info fa-lg"></i> About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link <%= (page == 'projects') ? 'active' : ''; %>" aria-current="page" href="/projects"><i class="fa-solid fa-diagram-project fa-lg"></i> Projects</a>
          </li>

          <li class="nav-item">
            <a class="nav-link <%= (page == 'services') ? 'active' : ''; %>" aria-current="page" href="/services"><i class="fa-solid fa-signs-post fa-lg"></i> Services</a>
          </li>
-->
          <li class="nav-item">
            <a class="nav-link <%= (page == 'contact') ? 'active' : ''; %>" aria-current="page" href="/contact"><i class="fa-solid fa-envelopes-bulk fa-lg"></i> Contact</a>
          </li>

          <% if(displayName) { %>

            <li class="nav-item">
              <a class="nav-link <%= (page == 'product-list') ? 'active' : ''; %>" aria-current="page" href="/product-list"><i class="fa-solid fa-table-list fa-lg"></i> Product List</a>
            </li>

             <li class="nav-item">
              <a class="nav-link <%= (page == 'movie-list') ? 'active' : ''; %>" aria-current="page" href="/categories-list"><i class="fa-solid fa-table-list fa-lg"></i> Category List</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/logout"><i class="fa-solid fa-right-from-bracket fa-lg"></i> Logout</a>
            </li>

          <% } else { %>

          <li className="nav-item">
            <a className="nav-link <%= (page == 'login') ? 'active' : ''; %>" aria-current="page" href="/login"><i className="fa-solid fa-right-to-bracket fa-lg"></i> Login</a>
          </li>

          <% } %>
          
        </ul>
      </div>
    </div>
  </nav>

    )
}

export default Header;