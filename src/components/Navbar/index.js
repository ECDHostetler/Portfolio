
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
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/" tabIndex={1} >
                        Home
                    </NavLink>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/about" tabIndex={2} >
                        About
                    </NavLink>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/experience" tabIndex={3} >
                        Experience
                    </NavLink>
                    <div className="nav-item dropdown">
                        <NavBtn className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" tabIndex={4}>
                            Clients
                        </NavBtn>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <NavLink onClick={() => setIsVisible(!isVisible)} to="/clients/developer" className="dropdown-item" tabIndex={4} >
                                Developer Clients
                            </NavLink>
                            <NavLink onClick={() => setIsVisible(!isVisible)} to="/clients/marketing" className="dropdown-item" tabIndex={4} >
                                Marketing Clients
                            </NavLink>          
                        </div>          
                    </div>
                    <NavLink onClick={() => setIsVisible(!isVisible)} to="/contact" tabIndex={5} >
                        Contact
                    </NavLink>
                </NavMenu>
                <Toggle />
            </Nav>
        </>
    );
};
 
export default Navbar;