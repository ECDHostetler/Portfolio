// pages/about.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import video from '../resources/videos/animated_clouds.webm';

const About = () => {
	return (
		<div className="col-12">
			<BgVid		
				src = {video}
			/>			
			<h1>
				Who I am. 
			</h1>
			<p>A problem solver that looks at the end goals of the greater picture and creates solutions to reach those goals. 
				Through active listening and engaging stakeholders in gathering requirements and insight to what the desired outcomes are 
				and developing solutions to turn those desires into reality in not only a practical way but aesthetically pleasing and accessible.</p>
			<h1>
				What I've done. 
			</h1>
			<p>

			</p>
			<h1>
				What I like to do.
			</h1>
			<p>
				
			</p>
		</div>
	);
};

export default About;
