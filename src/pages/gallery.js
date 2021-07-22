import React from 'react'

// CSS
import "./../styles/desktop/Gallery.css";

// Other
import MenuImg from "./../img/menu.jpg";
import pic1 from "./../img/pic1.jpg";
import pic2 from "./../img/pic2.jpg";
import pic3 from "./../img/pic3.jpg";
import pic4 from "./../img/pic4.jpg";
import pic5 from "./../img/pic5.jpg";


export default function gallery() {
    return (
        <div className="gallery">
          <h1>Gallery</h1>
          <div class="column-gallery">
            <img src={pic1}/>
          </div>
          <div class="column-gallery">
            <img src={pic2}/>
          </div>
          <div class="column-gallery">
            <img src={pic3}/>
          </div>
          <div class="column-gallery">
            <img src={pic4}/>
          </div>
          <div class="column-gallery">
            <img src={pic5}/>
          </div>
        </div>
    )
}
