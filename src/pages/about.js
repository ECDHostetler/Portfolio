// pages/about.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import video from '../resources/videos/animated_clouds.mp4';

const About = () => {
	return (
		<div className="col-12">
			<BgVid		
				src = {video}
			/>			
			<h1>
				Who I am. What I've done. What I like to do.
			</h1>
		</div>
	);
};

export default About;
