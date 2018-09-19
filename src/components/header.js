import React from 'react';
import logo from '../assets/rewards-logo.png';
import images from '../assets/logo-red.png';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  

const Header =  ()=> {
      return (
        
            <header className="col-12 hi">
              <div className="clear_float">
              <img className="float-left smaller img" src={logo} alt="reward logo"/>
             
                  
              <Link className="sato to_red xtra_small float-right margin-right" to='/'> <h4>Log Out</h4></Link>
              <img className="float-right round2" src={images} width='10vw' alt="hello"/>
            <span className="float-right round margin-right">🔔</span>
                 
              </div> 
          </header>
      
      );
    }
  
  
  export default Header;
  