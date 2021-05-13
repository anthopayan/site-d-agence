import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Navbar = () => {
return (
<div>
<nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid" >
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/works">Works</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
}

