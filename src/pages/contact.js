// pages/contact.js

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BgVid from '../components/BgVideo/bgVideo';
import video from '../resources/videos/animated_water.mp4';

const Contact = () => {
    const form = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);

    const sendEmail = (e) => {
      e.preventDefault();
      setIsVisible(!isVisible);
  
      emailjs
        .sendForm('service_ljcbv6h', 'template_9u9h54z', form.current, {
          publicKey: '5buPe51_y6osaM8YW',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSuccess(true);
          },
          (error) => {
            console.log('FAILURE!');
            setIsSuccess(false);
          },
        );
    };

	return (
		<div className="col-12">
            <BgVid		
                src = {video}
            />
            <div className="signup-form">
                {!isVisible && <h2 className="hide" id="emailSendResult">{isSuccess ? "Thank you for reaching out!" : "Oops! Something went wrong. Please try again later."}</h2> }
                {isVisible && 
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className="bd-title">Contact Me</h2>
                    <p className="hint-text">It's free and only takes a minute.</p>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" required="required" autoComplete="shipping name" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="example@email.net" required="required" autoComplete="email" />
                            </div>
                        </div>        	
                    </div>
                    <div className="form-group mb-3">
                        <label for="message">Message</label>
                        <textarea type="message" className="form-control" id="message" name="message" placeholder="Hi, I'm intersted in connecting with you about a project I have." autoComplete="off" />
                    </div> 
                    <div className="form-group mb-3">
                        <button type="submit" value="send" className="btn btn-success btn-lg btn-block">Submit</button>
                    </div>
                </form>
                }
            </div>
		</div>
	);
};

export default Contact;
