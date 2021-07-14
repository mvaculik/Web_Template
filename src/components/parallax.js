import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const parallax = (props) => {

    return(
        <ParallaxBanner 
        layers={[{image: props.imgsrc , amount: 0.3}]}
        style={{height: props.height}}
        >
            <div>
                {props.children}
            </div>
        </ParallaxBanner>
    
    )
    
}

export default parallax