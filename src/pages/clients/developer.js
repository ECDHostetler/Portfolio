// pages/clients/developer.js

import React from 'react';
import BgVid from '../../components/BgVideo/bgVideo';
import video from '../../resources/videos/animated_leaves.webm';
import Clients from '../../components/ItemLists/clientCard';

const DeveloperClients = () => {
	return (
        <div className="col-sm-12">
            <BgVid		
                src = {video}
            />            
            <h1>Former employers and clients I have worked for as a software developer.</h1>

            <Clients 
                type = 'Developer'
            />
        </div>
	);
};

export default DeveloperClients;
