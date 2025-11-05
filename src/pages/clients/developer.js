// pages/clients/developer.js

import React from 'react';
import BgVid from '../../components/BgVideo/bgVideo';
import Clients from '../../components/ItemLists/clientCard';

const DeveloperClients = () => {
	return (
        <div className="col-sm-12">
            <main>
                <BgVid		
                    src = {'animated_leaves'}
                />            
                <h2 className='title'>Former employers and the clients I have worked for in my career as a software developer.</h2>

                <Clients 
                    type = 'Developer'
                />
            </main>
        </div>
	);
};

export default DeveloperClients;
