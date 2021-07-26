import React from 'react'

// CSS
import "./../styles/desktop/Footer.css";

// Other
import Logo from "./../img/nolimits.png";

// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

export default function footer() {
    return (
        <div className="footer">
        <img src={Logo} />
        <div className="row-footer">
          <div class="column-footer">
            <h3>LOCATED</h3>
            <p>#</p>
            <p>#</p>
          </div>
          <div class="column-footer">
            <h3>OPENING HOURS</h3>
            <p>#</p>
            <p>#</p>
          </div>
          <div class="column-footer">
            <h3>CONTACTS</h3>
            <p>#</p>
            <p>#</p>
          </div>
          <section>
            <a><i><FaFacebookF/></i></a>
            <a><i><FaInstagram/></i></a>
            <a><i><SiTripadvisor/></i></a>
          </section>
        </div>
        <div className="bottom">
          <p>Copyright © 2021 - 2022 NOLIMITS.</p>
        </div>
      </div>
    )
}
