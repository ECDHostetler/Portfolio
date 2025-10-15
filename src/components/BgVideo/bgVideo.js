
// components/BgVid/index.js
 
import React from "react";
import defaultWebmVideo from "../../resources/videos/animated_clouds.webm";
import defaultMp4Video from "../../resources/videos/animated_clouds.mp4";
 
const BgVideo = ({ src }) => {
    
    let defaultWebmOrSource = !src ? defaultWebmVideo : require('../../resources/videos/' + src + '.webm');
    let defaultMp4OrSource = !src ? defaultMp4Video : require('../../resources/videos/' + src + '.mp4');

    return (
        <video autoPlay muted loop playsInline className="background-video" aria-label="A background animation video playing on a loop.">            
            <source src={defaultWebmOrSource} type="video/webm"/>
            <source src={defaultMp4OrSource} type="video/mp4"/>
            Your browser does not support the Video tag.
        </video>
    );
};
 
export default BgVideo;