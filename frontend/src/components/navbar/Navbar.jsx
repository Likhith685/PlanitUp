import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  //using google Auth0
  const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0()


  return (
    <div className='nav-1'>
      <div className='nav-2'>
        <img src="https://th.bing.com/th/id/R.36a152523ed09137199d7bb397d2c2c3?rik=b8ApIL08NqwJPg&riu=http%3a%2f%2fclipart-library.com%2fdata_images%2f267178.jpg&ehk=ptRnjar27koATXHChUndYAKPtvz2wbSd3T6dd9FoSLg%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <h1>Planit</h1>
      </div>
      
      <div className='nav-3'>
        <Link to="/" className='link'><p>Home</p></Link>
        <Link to="/create" className='link'><p>Create</p></Link>
        <Link to="/book" className='link'><p>Book</p></Link>
        <Link to="/about" className='link'><p>About us</p></Link>
      </div>

      {
        isAuthenticated? <div className="user-profile">
        <img src={user.picture} alt={user.name}  /> 
        <Link className="link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          <p>Logout</p>
        </Link>     
      </div>:
       <div className="nav-4">
        <Link className='link' onClick={(e)=>loginWithRedirect()}><p>Register / Sign in</p></Link>
      </div>
     }
    </div>
  );
}

export default Navbar;
