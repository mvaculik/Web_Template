import React from "react";
// Components
import Header from './components/header';
import Bottom from './components/bottom';
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




function App() {

  return (
    <div className="App">

      <ParallaxProvider>
        <Header/>
        <Bottom/>

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
              <p>SOCIAL SITES</p>
              <p>#</p>
              <p>#</p>
            </div>
            <div class="column-footer">
              <p>OPENING HOURS</p>
              <p>#</p>
              <p>#</p>
            </div>
            <div class="column-footer">
            <p>CONTACTS</p>
            <p>#</p>
            <p>#</p>
            </div>
          </div>
        </div>

        <div className="copyright">

        </div>

    </div>
  );
}

export default App;
