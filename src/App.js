import './styles/desktop/App.css';
import Header from './pages/header';
import Bottom from './pages/bottom';

import Parallax from "./components/parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Img1 from "./img/background.png";
import Down from "./img/nolimits.png";
import Menu from "./img/menu.jpg"
import ParallaxImg from "./img/background-px.jpg";

function App() {

  return (
    <div className="App">
      <ParallaxProvider>
        <Header/>
        <Bottom/>
        <div className="parallax">
        <Parallax imgsrc={ParallaxImg}>
        </Parallax>
        </div>
          <div className="title"><img src={Down}/></div>


      </ParallaxProvider>
        <div className="menu">
          <h1>MENU</h1>
          <div class="column">
          <img src={Menu}/>
          </div>
         <div class="column">
          <img src={Menu}/>
          </div>
        </div>
    </div>
  );
}

export default App;
