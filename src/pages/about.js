// pages/about.js

import React, {useState, useCallback}  from 'react';
import BgVid from '../components/BgVideo/bgVideo';
import CascadeSlider from '../components/Sliders/cascadeSlider';
import GetClients from "../components/Logic/getClients";
import clientXLSX from '../resources/files/client_list.xlsb.xlsx';
import Carousel from '../components/Sliders/carousel';

const About = () => {
	const [dataFromExcel, setDataFromExcel] = useState([]);

	const handleExcelDataLoaded = useCallback((data) => {		
		let filteredData = data.filter(row => row.client_feedback)
								.sort((a, b) => a.client_name > b.client_name ? 1 : -1);
		setDataFromExcel(filteredData);
	}, []); //Use useCallback so it doesn't create an inifinite call loop with GetClients

	const cards = 	[{ id: 1, title: 'Who am I?', image: 'vegas_2024.jpg', 
                    text: 'I had a diverse upbringing being born to a mother who was born and raised in Japan and having Amish and Mennonite missionary '
                    +'grandparents. I met my wife dating online in 2018 who later immigrated from Liaoning China to be with me in 2022. '
                    +"Since graduating with my Bachelor's degree in Computer Information Systems from Winona State I have been engaged on many various client projects for Marketing Automation"
                    +", Front End developer, Application Developer, and Full-Stack developer roles. If there is a role that needs a problem solver, I'm always ready to take on"
                    +' a new challenge.'
                },
                { id: 2, title: 'What do I do?', image: 'idea-innovation-submission_image-selection.jpg', 
                    text: 'A problem solver that looks at the end goals of the greater picture and create solutions to reach those '
                    +'goals. Through active listening and engaging stakeholders in gathering requirements and insight to what the desired outcomes are '
                    +'and developing solutions to turn those desires into reality in not only a practical way but aesthetically pleasing and accessible one.'
                },
                { id: 3, title: 'What am I looking for in my career?', image: 'pexels-seven11nash-380769.jpg', 
                    text: 'While I see myself as a jack of all trades constantly learning new skills and understanding other roles beyond just a programmer '
                    +'or developer on a team. I like challenges that push outside the normal scope, working to understand the needs of the end users and working '
                    +'towards achieving those needs. From creating logos and editing and posting videos to developing custom components from scratch. I appreciate '
                    +'a role where I can put those skills to good use and even help mentor others in what I have learned over a role that seeks to move senior '
                    +'employees up a ladder until they are no longer proficient in what they are expected to do. Give me a problem solve and let me impress you with the results.'
                },
                { id: 4, title: 'What do I like to do for fun?', image: 'Space_Mountain_blurred.jpg', 
                    text: 'Traveling and experiencing different and exciting things has been a life long passion. My '
                    +'interests in Anime, Card & Video games and Fantasy/Sci-Fi has seen me at many conventions from Otakon in Baltimore, Anime North in Toronto '
                    +'and MagicCon in Las Vegas over the years. My wife and I like to enjoy the tamer rides at amusement parks like the Simpsons ride at Universal '
                    +"Studios in Orlando or the Bubbler in Nickelodeon Universe at the Mall of America. I won't even start on all the food I love, but Sushi has been "
                    +'my favorite since I was 3.' 
                }];

	return (
		<div className="col-12">
			<main>
				<BgVid		
					src = {'animated_clouds'}
				/>		
				<GetClients
					excelFilePath={clientXLSX}
					onDataLoaded={handleExcelDataLoaded}
				/>  
				<Carousel 
					title='Testimonials: What Others Have Said About Me'
					slideData={dataFromExcel}
				/>
				<CascadeSlider 
					title='What Do I Say About Myself'
					cards={cards}
				/>	
			</main>
		</div>
	);
};

export default About;
