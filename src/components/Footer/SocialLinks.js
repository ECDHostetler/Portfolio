// components/Footer/SocialLinks.js

import React from "react";
import devImage from '../../resources/images/thumbnail.jpg'
import {
  FiTwitter,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const links = () => {

    const socialLinks = [
  {
    id: 1,
    icon: <FiTwitter />,
    url: "https://twitter.com/danjhostetler",
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/dan-hostetler-a1ab7432/",
  },
  {
    id: 3,
    icon: <FiMail />,
    url: "/contact",
  },
];

    return(
        <div className="dev-info">
            <div className="dev-header">
                <img src={devImage} alt="Dan J Hostetler" />
            </div>
            <p className="social-icons">
                {socialLinks.map((link) => (
                    <a href={link.url} target={link.id !== 3 ? "_blank" : "_self"} key={link.id} rel="noreferrer" className="">
                        <i className="">{link.icon}</i>
                    </a>
                ))}
            </p>
        </div>
    )
};

export default links;