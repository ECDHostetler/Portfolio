
// components/Navbar/index.js
 
import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    //NavBtnLink,
} from "./NavbarElements";
import Toggle from "../DayNightToggle/dayNightToggle.js"
 
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Nav>
                <Bars onClick={() => setIsVisible(!isVisible)} />

                <NavMenu className={isVisible ? "show" : ""}>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/" >
                        Home
                    </NavLink>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/about" >
                        About
                    </NavLink>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/experience" >
                        Experience
                    </NavLink>
                    <div className="nav-item dropdown">
                        <NavBtn className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Clients
                        </NavBtn>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <NavLink onClick={() => setIsVisible(!isVisible)} to="/clients/developer" className="dropdown-item" >
                                Developer Clients
                            </NavLink>
                            <NavLink onClick={() => setIsVisible(!isVisible)} to="/clients/marketing" className="dropdown-item" >
                                Marketing Clients
                            </NavLink>          
                        </div>          
                    </div>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/contact" >
                        Contact
                    </NavLink>
                </NavMenu>
                <Toggle />
            </Nav>
        </>
    );
};
 
export default Navbar;