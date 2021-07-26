import React from 'react'

// CSS
import './../App';
import './../styles/desktop/Header.css';

// Icons
import { BsChevronCompactDown } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";



function header() {
    return (
      <div className="header">
        <div className="topNav">
          <p className="active"><i><GiPositionMarker/></i> Danziger Str. 47, 94036 Passau, Německo</p>
          <section className="soc">
          <a href="#about"> <i> <FaFacebookF/> </i> </a>
          <a href="#about"> <i> <FaInstagram/> </i> </a>
          <a href="#about"> <i> <SiTripadvisor/> </i> </a>
          </section>
        </div>
        <div className="nav">
          <p className="active"><i><GiPositionMarker/></i> Danziger Str. 47, 94036 Passau, Německo</p>

          <a href=".aboutus">NOLIMITS</a>
          <a href="#menu">MENU</a>
          <a href="#events">EVENTS</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contacts">CONTACTS</a>

          <section className="soc">
          <a href="#about"> <i> <FaFacebookF/> </i> </a>
          <a href="#about"> <i> <FaInstagram/> </i> </a>
          <a href="#about"> <i> <SiTripadvisor/> </i> </a>
          </section>

          <a className="icon" onclick="toggleMenu()"><BsChevronCompactDown/></a>
        </div>

      </div>
    );
  }
  
  export default header;
