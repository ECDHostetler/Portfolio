// components/ItemLists/timeLine.js

import React, {useState, useEffect} from "react";
import { Timeline } from 'rsuite';
import UserIcon from '@rsuite/icons/legacy/User';
import * as XLSX from 'xlsx';
import clientXLSX from '../../resources/files/client_list.xlsb.xlsx';
import Modal from '../../components/Modal/modalComponent';
import $ from 'jquery';

const TimeLineComponent = ({ type, align }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const modalType = type;    

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

    const populateDescription = (modalType, clientName, clientDescription) => {
        // Populate the modal with provided client name and description on click
        $('#'+ modalType + 'Modal .modal-title').html(clientName);
        $('#'+ modalType + 'Modal .modal-body').html(clientDescription);
    }

    const handleKeyDown = (event) => {
        // Check if the pressed key is Enter or Spacebar
        if (event.key === 'Enter' || event.key === ' ') {
            // Prevent default behavior to avoid scrolling if Spacebar is pressed
            event.preventDefault(); 
            // Trigger the click event on the div
            event.target.click(); 
        }
    };

    const formatDate = (date) =>{
        const newDate = new Date(date+1); //Fix date offset rendering months 1 behind actual date provided.
        const formattedDate = !isNaN(newDate) ? newDate.toLocaleString('en-US', {month: 'long', year: 'numeric'}) : '';

        return formattedDate;
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Timeline align={align} className="custom-timeline">            
                        {data.filter((obj, index, self) => index === self.findIndex((o) => o.client_name === obj.client_name && o.client_start_date === obj.client_start_date))
                        .sort((a, b) => a.client_start_date > b.client_start_date ? 1 : -1).map((item, i) => (
                            <Timeline.Item key={i} dot={<UserIcon />} >
                                <div className={""+modalType+"Card"} tabIndex={7} data-bs-toggle="modal" data-bs-target={"#"+modalType+"Modal"} onClick={() => populateDescription(modalType, item.client_name, item.client_description)} onKeyDown={handleKeyDown}>
                                    <h5>{formatDate(item.client_start_date)} - {formatDate(item.client_end_date)}</h5>
                                    <h6>{item.client_name}: {item.isEmployer === 'yes' ? 'Employer' : item.client_primary_technology + ' Client'}</h6>
                                    <p>{item.technology_stack}</p>
                                </div>
                            </Timeline.Item>       
                        ))}
                    </Timeline>  
                </div>
            </div>      
            <Modal modalType = {modalType} />
        </>
    );
};

export default TimeLineComponent;