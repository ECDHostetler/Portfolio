// pages/clients/marketing.js

import React from 'react';
import BgVid from '../../components/BgVideo/bgVideo';
import video from '../../resources/videos/animated_waves.mp4';
import Clients from '../../components/ItemLists/clientCard';

const MarketingClients = () => {
	return (
        <div className="col-sm-12">
            <BgVid		
                src = {video}
            />            
            <h1>Former employers and clients I have worked for as a marketing automation expert.</h1>

            <Clients 
                type = 'Marketing'
            />
        </div>
	);
};

export default MarketingClients;
