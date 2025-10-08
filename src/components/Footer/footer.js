// components/Footer/footer.js
 
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="col-xs-12">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                            <p className="mb-0">&copy; {currentYear}</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">

                        </div>   
                    </div>
                </div>
                <div className="container mt-0">
                    <div className="row">
                        <div className="col-xs-12 disclaimer">
                            <p>This site may contain images and videos that are sourced from the public domain or are used under an open license, 
                            such as Creative Commons Zero (CC0), and are therefore not subject to the website's main copyright. These materials are used 
                            to provide information and enhance user experience. While we make every effort to use only content that is free for commercial 
                            and non-commercial use, we do not guarantee the status of these materials. You are responsible for independently verifying the 
                            copyright status of any public domain content before using it.
                            </p> 
                        </div>
                    </div>
                </div>  
            </div>
        </footer>
    )
};

export default Footer;