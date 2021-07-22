import React from 'react';
import MenuImg from "./../img/menu.jpg";

// CSS
import "./../styles/desktop/Menu.css";

export default function menu() {
    return (
        <div className="menu">
        <h1>MENU</h1>
        <div class="column-menu">
          <img src={MenuImg}/>
        </div>
        <div class="column-menu">
          <img src={MenuImg}/>
        </div>
      </div>
    )
}
