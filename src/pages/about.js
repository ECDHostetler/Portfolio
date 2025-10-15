// pages/about.js

import React from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import CascadeSlider from '../components/Sliders/cascadeSlider';

const About = () => {

const cards = 	[{ id: 1, title: 'Who am I?', image: 'vegas_2024.jpg', 
					text: 'I had a diverse upbringing being born to a mother who was born and raised in Japan and having Amish and Mennonite missionary '
					+'grandparents. I met my wife dating online in 2018 who later imigrated from Liaoning China to be with me in 2022. '
					+"Since graduating with my Bachelor's from Winona State I have been engaged on many various client projects for Marketing Automation"
					+", Front End developer, Application Develoepr, Full-Stack developer. If there is a role that needs a problem solver, I'm alwasy game to take on"
					+' a challenge.'
				},
    			{ id: 2, title: 'What do I do?', image: 'idea-innovation-submission_image-selection.jpg', 
					text: 'A problem solver that looks at the end goals of the greater picture and create solutions to reach those '
					+'goals. Through active listening and engaging stakeholders in gathering requirements and insight to what the desired outcomes are '
					+'and developing solutions to turn those desires into reality in not only a practical way but aesthetically pleasing and accessible.'
				},
    			{ id: 3, title: 'What do I like to do for fun?', image: 'Space_Mountain_blurred.jpg', 
					text: 'Traveling and experiencing different and exciting things has been a life long passion. My '
					+'interests in Anime, Card & Video games and Fantasy/Sci-Fi has seen me at many conventions from Otakon in Baltimore, Anime North in Toronto '
					+'and MagicCon in Las Vegas over the years. My wife and I like to enojy the tamer rides at amusment parks like the Simpsons ride at Universal '
					+"Studios in Orlando or the Bubbler in Nickelodeon Universe at the Mall of America. I won't even start on all the food I love, but Sushi has been "
					+'my favorite since I was 3.' 
				}];

	return (
		<div className="col-12">
			<BgVid		
				src = {'animated_clouds'}
			/>		
			<CascadeSlider 
				title='About Me'
				cards={cards}
			/>	
		</div>
	);
};

export default About;
