
// components/BgVid/index.js
 
import React from "react";
import defaultVideo from "../../resources/videos/animated_clouds.webm";
 
const BgVideo = ({ src }) => {
    
    let defaultOrSource = !src ? defaultVideo : src;

    return (
        <video autoPlay muted loop playsInline className="background-video" aria-label="A background animation video playing on a loop.">            
            <source src={defaultOrSource} type="video/webm"/>
            <source src={defaultOrSource} type="video/mp4"/>
            Your browser does not support the Video tag.
        </video>
    );
};
 
export default BgVideo;