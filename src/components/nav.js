import React from 'react';
import '../assets/icons.css';

import images from '../assets/logo-red.png';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Navbar = (props)=> {
      return (
      
           
        <nav className="col-2 sidebar">
        <ul>
        <li><Link className='active' to='dashboard'><i className='icon-dashboard'></i>Dashboard <span className='left'>►</span></Link></li>
        <li><Link to='/' className='active' ><i className='icon-cms'></i>Content Management<span className='left'>►</span></Link></li>
        <li><Link to='/' className='active' ><i className='icon-user'></i>User Management<span className='left'>►</span></Link></li>
        <li><Link className='active'  to="table"><i className='icon-reporting'></i>Reporting<span className='left'>{props.name}</span></Link>
        {props.children}

      
        
        </li>
        <li><Link to='/'  className='active' ><i className='icon-settings'></i>System Settings<span className='left'>►</span></Link></li>
        </ul>

        <img className="logo-red" width="90vw" src={images} alt=""/>
        <p className="footer">Copyright &copy; 2018 UBA group PLC. <br/> Powered by interswitch</p>
    </nav>
      );
    }
  
  
  export default Navbar;