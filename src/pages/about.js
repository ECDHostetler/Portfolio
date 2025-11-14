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
                    text: "I come from a diverse background—born to a mother from Japan and raised in a family shaped by Amish and Mennonite missionary roots. In 2018, I met my wife online, "
					+"and she later immigrated from Liaoning, China in 2022. \n Academically, I earned Associate degrees in Computer Science and Business Management (Marketing emphasis) from "
					+"Rochester Community & Technical College, followed by a Bachelor's in Computer Information Systems from Winona State University. Since then, I’ve collaborated on a wide "
					+"range of client projects across Marketing Automation, Front-End Development, Application Development, and Full-Stack roles. At my core, I’m a problem solver who thrives "
					+"on new challenges."
                },
                { id: 2, title: 'What do I do?', image: 'idea-innovation-submission_image-selection.jpg', 
                    text: "I’m a problem solver who starts with the end goal in mind. I work closely with stakeholders to understand their needs, gather meaningful requirements, and translate "
					+'those insights into practical, accessible, and visually polished solutions. \n I help teams turn ideas into real, usable outcomes. By actively listening and collaborating '
					+'with stakeholders, I uncover the goals behind the work and design solutions that are not only functional, but also intuitive, accessible, and visually appealing. \n I specialize'
					+' in identifying the bigger-picture goals and building the solutions that achieve them. I engage stakeholders early, gather clear requirements, and develop practical, user-friendly,'
					+' and thoughtfully designed experiences.'
                },
                { id: 3, title: 'What am I looking for in my career?', image: 'pexels-seven11nash-380769.jpg', 
                    text: "I’m a versatile, constantly learning professional who enjoys understanding the full picture—not just the programming side. Being cross-trained across departments "
					+"early in my career helped me excel, earning multiple Employee of the Month and MVP awards, and that mindset has carried into my development work. \n I’m drawn to roles "
					+"that challenge me, push beyond the standard scope, and allow me to deeply understand and meet user needs. Whether I’m designing logos, editing videos, or building "
					+"custom components from the ground up, I value positions where I can apply a wide range of skills and mentor others along the way. I’m not looking for a ladder that pulls "
					+"people away from what they do best—I thrive in roles where I can solve problems directly and deliver results that make an impact."
                },
                { id: 4, title: 'What do I like to do for fun?', image: 'Space_Mountain_blurred.jpg', 
                    text: "I’ve always loved traveling and experiencing new places and cultures. I’m also a big fan of anime, card and video games, and all things fantasy and sci-fi. Over "
					+"the years I’ve made it to conventions like Otakon in Baltimore, Anime North in Toronto, and MagicCon in Las Vegas. \n My wife and I enjoy visiting amusement "
					+"parks—usually sticking to the gentler rides like The Simpsons Ride at Universal Studios or the Bubbler at Nickelodeon Universe. And while I could talk endlessly about "
					+"food, I’ll just say this: sushi has been my favorite since I was three." 
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
