// pages/experience.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import Timeline from "../components/ItemLists/timeLine";

const Experience = () => {
	const modalType = 'event';	
	const timeLineType = 'alternate';

	return (
		<div className='col-12'>
			<main>
				<BgVid		
					src = {'animated_rain'}
				/>
				<h2 className='title'>The breakdown of my entire work history of employers and clients from teenage volunteering to career professional developer and marketing automation specialist today.</h2>
				<Timeline type = {modalType} align={timeLineType} />
			</main>
		</div>
	);
};

export default Experience;
