import './styles/desktop/App.css';
import Header from './pages/header';
import Bottom from './pages/bottom';

import Parallax from "./components/parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Img1 from "./img/bg2.png";
import Down from "./img/down.png";

function App() {

  return (
    <div className="App">
      <ParallaxProvider>
        <Header/>
        <Bottom/>
        <div className="parallax">
        <Parallax imgsrc={Img1} height="950px" opacity="0.5"></Parallax>
        </div>
        <div className="test">
          <img src={Down}/>
        </div>

        <div className="">

        </div>

      </ParallaxProvider>
    </div>
  );
}

export default App;
