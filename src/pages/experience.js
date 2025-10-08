// pages/experience.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import video from '../resources/videos/animated_rain.mp4';
import Timeline from "../components/ItemLists/timeLine";

const Experience = () => {
	const modalType = 'event';	
	const timeLineType = 'alternate';

	return (
		<div className='col-12'>
			<BgVid		
				src = {video}
			/>
			<h1>The breakdown of my entire work history.</h1>
			<Timeline type = {modalType} align={timeLineType} />
		</div>
	);
};

export default Experience;
