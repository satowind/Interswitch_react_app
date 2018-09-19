import React from 'react';
import images from '../assets/logo-red.png';

const Footer = ()=> {
      return (
        <footer className="mobile">
          <img className="" width="90vw" src={images} alt=""/>
          <p className="">Copyright &copy; 2018 UBA group PLC. <br/> Powered by interswitch</p>
          </footer>
      );
    }

export default Footer;
