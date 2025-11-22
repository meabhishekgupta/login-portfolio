import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark px-3" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          My Portfolio
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
          <a href='/Login'>Login</a>
        </div>
      </div>
    </nav>
  )
}
