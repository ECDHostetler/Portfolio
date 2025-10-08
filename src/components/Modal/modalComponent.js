// components/Modal/modalComponent.js

import  React, { useEffect } from "react";
import $ from 'jquery';

const Modal = ({modalType}) => {

    // useEffect hook to remove focus of active element for blocked aria-hidden on an element because its descendant retained focus.
    useEffect(() => {
        const handleGlobalClick = () => {
            $(document.activeElement).blur();
        };

        window.addEventListener('click', handleGlobalClick);

        return () => {
            window.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    return (
        <div className='modal' id={modalType+'Modal'} tabIndex='-1'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title text-uppercase'>{modalType} title</h5>
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
    )
};

export default  Modal;
