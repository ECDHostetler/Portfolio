
// components/Navbar/index.js
 
import React, { useEffect, useState, useRef } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    //NavBtnLink,
} from "./NavbarElements";
import { useLocation } from 'react-router-dom';
import Toggle from "../DayNightToggle/dayNightToggle.js"
import useScreenSize from "../Logic/useScreenSize.js";
 
const Navbar = () => {
    const location = useLocation();
    const { width } = useScreenSize();
    const breakpoint = 768; 
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(false);
    const [isActiveChild, setIsActiveChild] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function checkActiveTab() {
            setIsActiveChild(currentPath === "/clients/developer" || currentPath === "/clients/marketing")
        }

        checkActiveTab();        
    }, [currentPath]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (width <= breakpoint && isVisible && !dropdownRef.current.contains(event.target)) {
                setIsVisible(!isVisible);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, width]);


    return (
        <>
            <Nav>
                <Bars onClick={() => setIsVisible(!isVisible)} />

                <NavMenu className={isVisible ? "show" : ""} ref={dropdownRef}>
                    <NavLink onClick={() => {
                        setIsVisible(!isVisible);} }
                        to="/" tabIndex={1} >
                        Home
                    </NavLink>
                    <NavLink onClick={() => {
                        setIsVisible(!isVisible);}} 
                        to="/about" tabIndex={2} >
                        About
                    </NavLink>
                    <NavLink onClick={() => {
                        setIsVisible(!isVisible);}} 
                        to="/experience" tabIndex={3} >
                        Experience
                    </NavLink>
                    <div className="nav-item dropdown">
                        <div className={isActiveChild ? 'parent-active' : ''}>
                            <NavBtn className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" tabIndex={4}>
                                Clients
                            </NavBtn>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <NavLink onClick={() => {
                                    setIsVisible(!isVisible);}} 
                                    to="/clients/developer" className="dropdown-item" tabIndex={4} >
                                    Developer Clients
                                </NavLink>
                                <NavLink onClick={() => {
                                    setIsVisible(!isVisible);}} 
                                    to="/clients/marketing" className="dropdown-item" tabIndex={4} >
                                    Marketing Clients
                                </NavLink>          
                            </div>    
                        </div>      
                    </div>
                    <NavLink onClick={() => {
                        setIsVisible(!isVisible);}} 
                        to="/contact" tabIndex={5} >
                        Contact
                    </NavLink>
                </NavMenu>
                <Toggle />
            </Nav>
        </>
    );
};
 
export default Navbar;