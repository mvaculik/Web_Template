import React from 'react'

// CSS
import "./../styles/desktop/Aboutus.css";

// Icons
import { SiTripadvisor } from "react-icons/si";
import { BsWifi } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";

export default function aboutus() {
    return (
        <div className="aboutus">
        <h1>WELCOME TO NOLIMITS</h1>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet tempor neque. Aenean hendrerit volutpat semper. Suspendisse eget lacinia leo, ut posuere velit. Donec pulvinar felis justo, ut placerat felis accumsan et. Donec vitae enim eleifend, auctor augue ut, feugiat orci. Donec pellentesque ac purus non laoreet.</p>
        <div className="row-aboutus">
          <div class="column-aboutus">
            <p style={{color: "#4f76ea"}}>FREE WIFI ZONE</p>
            <i style={{color: "#4f76ea"}}><BsWifi/></i>
          </div>
          <div class="column-aboutus">
            <p style={{color: "#bd62dd"}}>LIVE MUSIC</p>
            <i style={{color: "#bd62dd"}}><BsMusicNoteBeamed/></i>
          </div>
          <div class="column-aboutus">
          <p style={{color: "#34E0A1"}}>TRIPADVISOR</p>
          <i style={{color: "#34E0A1"}}><SiTripadvisor/></i>
          </div>
        </div>
      </div>
    )
}
