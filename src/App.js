import React from "react";
// Components
import Parallax from "./components/parallax";
import Header from "./components/header";
import Map from "./components/map";
import Footer from "./components/footer";

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

// Icon



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

        <Map/>

        <Footer/>


    </div>
  );
}

export default App;
