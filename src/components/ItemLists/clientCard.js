// components/ItemLists/clientCard.js

import React, {useState, useEffect} from 'react';
import * as XLSX from 'xlsx';
import clientXLSX from '../../resources/files/client_list.xlsb.xlsx';
import defaultImage from '../../resources/images/coming-soon-stamp.jpg';
import $ from 'jquery';

const Clients = ({ type }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the file from the public directory
                const response = await fetch(clientXLSX);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch file: ${response.statusText}`);
                }

                // Convert the response to an ArrayBuffer
                const arrayBuffer = await response.arrayBuffer();
                
                // Use the xlsx library to read the file data
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });

                // Get the first sheet's name and worksheet
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                
                // Convert the worksheet to JSON format
                const json = XLSX.utils.sheet_to_json(worksheet);
                
                // Store the JSON data in the component's state
                setData(json);

            } 
            catch (e) {
                setError(e.message);
                console.error('Error reading the Excel file:', e);
            }
        };

        fetchData();
    }, []);

    if (error) {
        // Render error to page
        return <div>Error: {error}</div>;
    }

    if (!data) {
        // While it will appear briefly this will provide a loading screen when navigating to the client pages
        return <div>Loading...</div>;
    }

    const getImage = (imageName) => {
        // convert 'null' text null value
        imageName = imageName === 'null' ? null : imageName;
        // if imageName is null provide the default coming soon image or else return the image provided
        let img = !imageName ? defaultImage : require('../../resources/images/' + imageName + '.png');
        return img;
    }

    const populateDescription = (clientName, clientDescription) => {
        // Populate the modal with provided client name and description on click
        $('#clientModal .modal-title').html(clientName);
        $('#clientModal .modal-body').html(clientDescription);
    }

    // Render the data in a simple table
    return (
        <div>
            <div className='container'>
                <div className='row'>
                {data.filter(item => item.client_type === type).map((item, i) => (
                        <div key={i} className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='clientCard'>
                                <div className='clientLogo align-content-center text-center'>
                                    <img src={getImage(item.client_logo)} alt={'client logo ' + (item.client_logo === 'null' ? 'coming soon' : item.client_logo)} />
                                </div>
                                <div className='clientName'>
                                    <h6>{item.client_name}</h6>
                                </div>
                                <div className='clientSkillStack'>
                                    <h6>Technology Stack:</h6>
                                    <p>{item.technology_stack}</p>
                                </div>
                                <div className='clientAboutButton text-center'>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#clientModal" onClick={() => populateDescription(item.client_name, item.client_description)}>
                                        About Client
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='modal' id='clientModal' tabIndex='-1'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{type} title</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;