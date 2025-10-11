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
            <h1>Former employers and the clients I have worked for in my career as a software developer.</h1>

            <Clients 
                type = 'Developer'
            />
        </div>
	);
};

export default DeveloperClients;
