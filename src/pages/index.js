// pages/index.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';

const Home = () => {
return (
		<div className="col-12">
			<main>
				<BgVid		
					src = {'animated_blossoms'}
				/>
				<div className='main-page'>
					<h3>Welcome to my portfolio page. </h3>
					<p>It gives details about who I am through testimonials and self reflections and a full detailing of my entire work history with employers and clients.</p>
					<p>There are many UI components on the pages so be sure to play around and try out the Day/Night style functionality. Please click or tap buttons and elements to see more information on clients and timeline events.</p>
					<p>Thank you for stopping by.</p>
				</div>
			</main>
		</div>
	);
};

export default Home;
