import React, { Component } from 'react';
import logo from './../assets/logo.png';
import './login.css';
// react-native


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


//import image from './../../public/logo-red.png';


class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className='cols-2 divs paddings centers'>
           <h3 className='transparents4'>Sign In</h3> <img className='imgs' src={logo}  alt=""/>

           <br/><br/><br/>
           
           <label className='fulls transparents' htmlFor="email">
           Email  </label>
           <br/>
           <input type="text" name='email' className='fulls inputs'/>
         
           <br/><br/>
           <label className='fulls transparents' htmlFor="password"  >
           Password </label>
          
           <input type="password" name='password' className='fulls inputs'/>
           <br/><br/>
           <a className='fulls transparents2' href="">forgot your password</a>
            <br/><br/>
          
           <Link className='lefts satos btn-reds to_reds fulls xtra_smalls' to="/dashboard">Login<span className='rights'>►</span></Link>
           <br/><br/>
           <p className='transparents3'>Don't have an account</p>

           <button className=' lefts satos btn-whites to_whitesmokes fulls xtra_smalls'>Request for Access <span className='rights'>►</span></button> 

        </div>
      </div>
    );
  }
}

export default Login;
