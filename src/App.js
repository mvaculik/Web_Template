import React from "react";
// Components
import Header from './components/header';
// import Bottom from './components/bottom';
import Parallax from "./components/parallax";

// Pages
import Menu from "./pages/menu";
import Gallery from "./pages/gallery";
import Event from "./pages/event";
import Aboutus from "./pages/aboutus";

// CSS
import './styles/desktop/App.css';

// Other
import { ParallaxProvider } from "react-scroll-parallax";
import Logo from "./img/nolimits.png";
import ParallaxImg from "./img/background-px.jpg";
import Map from "./img/map.PNG";

// Icon
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";



function App() {

  return (
    <div className="App">

      <ParallaxProvider>
        <Header/>

        <div className="parallax">
          <Parallax imgsrc={ParallaxImg}></Parallax>
        </div>

        <div className="title"><img src={Logo}/></div>

      </ParallaxProvider>

       
        <Aboutus/>
        <Menu/>
        <Event/>
        <Gallery/>

        <div className="map">
          <img src={Map} />
        </div>

        <div className="footer">
          <img src={Logo} />
          <div className="row-footer">
            <div class="column-footer">
              <h3>SOCIAL SITES</h3>
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


    </div>
  );
}

export default App;
