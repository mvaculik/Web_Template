import React from 'react'
import './../App';
import './../styles/desktop/Header.css';
import { BsChevronCompactDown } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";


function header() {
    return (
      <div className="header">
        <div className="topNav">
          <p className="active"><i><GiPositionMarker/></i> Danziger Str. 47, 94036 Passau, Německo</p>
          <a href="#about">F</a>
          <a href="#about">IG</a>
          <a href="#about">TT</a>
        </div>
        <div className="nav">
          <p className="active"><i><GiPositionMarker/></i> Danziger Str. 47, 94036 Passau, Německo</p>

          <a href="#news">NOLIMITS</a>
          <a href="#contact">EVENTS</a>
          <a href="#about">MENU</a>
          <a href="#about">GALLERY</a>
          <a href="#about">CONTACTS</a>

          <section className="soc">
          <a href="#about">F</a>
          <a href="#about">IG</a>
          <a href="#about">TT</a>
          </section>

          <a className="icon" onclick="myFunction()"><BsChevronCompactDown/></a>
        </div>

      </div>
    );
  }
  
  export default header;
