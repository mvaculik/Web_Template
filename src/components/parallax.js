import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const parallax = (props) => {

    return(
        <ParallaxBanner style={{background: "#e2a"}}
        layers={[{image: props.imgsrc , amount: 0.3}]}
        style={{paddingTop: "51%", opacity: "0.3"}}
        >
            <div>
                {props.children}
            </div>
        </ParallaxBanner>
    
    )
    
}

export default parallax