// pages/clients/marketing.js

import React from 'react';
import BgVid from '../../components/BgVideo/bgVideo';
import Clients from '../../components/ItemLists/clientCard';

const MarketingClients = () => {
	return (
        <div className="col-sm-12">
            <main>
                <BgVid		
                    src = {'animated_waves'}
                />            
                <h2 className='title'>Former employers and the clients I have worked for in my career as a marketing automation expert.</h2>

                <Clients 
                    type = 'Marketing'
                />
            </main>
        </div>
	);
};

export default MarketingClients;
