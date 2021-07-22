import React from 'react'

// CSS
import "./../styles/desktop/Event.css";

// Other
import Party from "./../img/party.jpg";
import pic1 from "./../img/pic1.jpg";

export default function event() {
    return (
        <div className="event">
        <h1>Events</h1>

        <div class="column-event">
          <div className="img-section">
            <img src={pic1}/>
          </div>
          <div className="text-section">
            <h1>Title</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur 
                sagittis hendrerit ante. Fusce wisi. Mauris tincidunt sem sed arcu. 
                Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante. 
                Etiam quis quam. Nullam sit amet magna in magna gravida vehicula. 
                Mauris elementum mauris vitae tortor. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
                Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, 
                fermentum fringilla, vehicula vitae, justo. Et harum quidem rerum facilis est 
                et expedita distinctio. Curabitur vitae diam non enim vestibulum interdum. 
                Nullam eget nisl. Fusce wisi. Quisque porta. 
            </p>
          </div>
        </div>

        <div class="column-event">
          <div className="img-section">
            <img src={Party}/>
          </div>
          <div className="text-section">
            <h1>Title</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur 
                sagittis hendrerit ante. Fusce wisi. Mauris tincidunt sem sed arcu. 
                Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante. 
                Etiam quis quam. Nullam sit amet magna in magna gravida vehicula. 
                Mauris elementum mauris vitae tortor. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
                Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, 
                fermentum fringilla, vehicula vitae, justo. Et harum quidem rerum facilis est 
                et expedita distinctio. Curabitur vitae diam non enim vestibulum interdum. 
                Nullam eget nisl. Fusce wisi. Quisque porta. 
            </p>
          </div>
        </div>

        <div class="column-event">
          <div className="img-section">
            <img src={Party}/>
          </div>
          <div className="text-section">
            <h1>Title</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur 
                sagittis hendrerit ante. Fusce wisi. Mauris tincidunt sem sed arcu. 
                Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante. 
                Etiam quis quam. Nullam sit amet magna in magna gravida vehicula. 
                Mauris elementum mauris vitae tortor. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
                Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, 
                fermentum fringilla, vehicula vitae, justo. Et harum quidem rerum facilis est 
                et expedita distinctio. Curabitur vitae diam non enim vestibulum interdum. 
                Nullam eget nisl. Fusce wisi. Quisque porta. 
            </p>
          </div>
        </div>

        
      </div>
    )
}
