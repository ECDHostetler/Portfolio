// pages/index.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';

const Home = () => {
return (
		<div className="col-12">
			<BgVid		
				src = {'animated_blossoms'}
			/>
			<div className='main-page'>
				<h3>Welcome to my portfolio page. </h3>
				<p>It gives details about who I am through testimonials and self reflections and a full detailing of my career and past work history with employers and clients.</p>
				<p>There are many UI components on the pages so be sure to play around and try out the Day/Night style functionality and tap and click to see more information on clients and timeline events.</p>
				<p>Thank you for stopping by.</p>
			</div>
		</div>
	);
};

export default Home;
