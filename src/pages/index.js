// pages/index.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import video from '../resources/videos/animated_blossoms.webm';

const Home = () => {
return (
		<div className="col-12">
			<BgVid		
				src = {video}
			/>
			<h1>Welcome to the work in progress on my little site about me. More information and styling coming soon.</h1>
		</div>
	);
};

export default Home;
