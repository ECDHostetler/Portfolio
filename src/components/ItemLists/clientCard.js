// components/ItemLists/clientCard.js

import React, {useState, useCallback} from 'react';
import defaultImage from '../../resources/images/coming-soon-stamp.jpg';
import Modal from '../Modal/modalComponent';
import GetClients from "../Logic/getClients";
import $ from 'jquery';
import clientXLSX from '../../resources/files/client_list.xlsb.xlsx';

const Clients = ({ type }) => {
    const [dataFromExcel, setDataFromExcel] = useState([]);
    const modalType = 'client';

    const handleExcelDataLoaded = useCallback((data) => {
        setDataFromExcel(data);
    }, []); //Use useCallback so it doesn't create an inifinite call loop with GetClients


    const getImage = (imageName) => {
        // convert 'null' text null value
        imageName = imageName === 'null' ? null : imageName;
        // if imageName is null provide the default coming soon image or else return the image provided
        let img = !imageName ? defaultImage : require('../../resources/images/' + imageName + '.png');
        return img;
    }

    const populateModal = (modalType, clientName, clientDescription, background) => {
        // Populate the modal with provided client name and description on click
        let image = !background ? '' : require('../../resources/images/' + background);
        $('#'+ modalType + 'Modal .modal-title').html(clientName);
        $('#'+ modalType + 'Modal .modal-body').html(clientDescription);
        $('#'+ modalType + 'Modal .modal-content').css({'background-image': 'url('+ image + ')'});
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <GetClients
                        excelFilePath={clientXLSX}
                        onDataLoaded={handleExcelDataLoaded}
                    />  
                    {dataFromExcel.filter(item => item.client_type === type)
                        .sort((a, b) => a.isEmployer < b.isEmployer ? 1 : -1)
                        .map((item, i) => (
                        <div key={i} className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='clientCard'>
                                <div className='clientLogo align-content-center text-center'>
                                    <img src={getImage(item.client_logo)} alt={'client logo ' + (item.client_logo === 'null' ? 'coming soon' : item.client_logo)} />
                                </div>
                                <div className='clientName'>
                                    <h6>{item.client_name}: {item.isEmployer === 'yes' ? 'Employer' : item.client_primary_technology + ' Client'}</h6>
                                </div>
                                <div className='clientSkillStack'>
                                    <h6>Technology Stack:</h6>
                                    <p>{item.technology_stack}</p>
                                </div>
                                <div className='clientAboutButton text-center'>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#"+modalType+"Modal"} onClick={() => populateModal(modalType, item.client_name, item.client_description, item.background_image)}>
                                        About {item.isEmployer === 'no' ? 'Client' : 'Employer'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal modalType = {modalType} />
        </>
    );
};

export default Clients;