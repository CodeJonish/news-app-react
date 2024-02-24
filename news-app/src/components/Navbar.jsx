import React from 'react'

const Navbar = ({setCategory}) => {
    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand badge bg-danger fs-4" href="#">NEWS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <div class="dropdown">
  <p class=" dropdown-toggle text-light py-2 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </p>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('business')}}>business</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('entertainment')}}>entertainment</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('general')}}>general</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('health')}}>health</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('science')}}>science</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('sports')}}>sports</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>{setCategory('technology')}}>technology</a></li>
  </ul>
</div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar